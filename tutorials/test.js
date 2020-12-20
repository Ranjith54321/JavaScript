// fun()
// function fun(){
//     console.log("hi")
// }

app.log(app.data, 'DATA IN MAIN')
//app.sender = '+918124537103'
if (app.BOT_ENV === "production") {
   // app.audienceId = "5f321ee1a86b8e6aeb162341"
} else if (app.BOT_ENV === "staging") {
    app.audienceId = "5f3f6a396e2ebce6ed43a304"
}
else {
    app.audienceId = "5f3a29e86c32a183183feab2"
}
app.CONTINUE = {
    "text_type": "ssml"
}
app.DISCONNECT = {
    "text_type": "ssml",
    "disconnect": true
}
const verifyUser = async () => {
    app.memory.set('count1', '1');
    let result;
    try {
        result = await app.audience.find(app.audienceId,
            { type: "number", value: app.sender.toString().substring(3) })
    }
    catch (e) {
        app.log(e);
    }
    //app.log(result, 'here record')
    let flow = result.docs.flowNature;
    let number = app.sender.toString().substring(3)
    let callNature = result.docs.callNature;
    app.log('number', number)
    if (flow.toLowerCase().trim() == "current year") {
        flow="current year";
    }
    else if (flow.toLowerCase().trim() == '30days') {
        flow = "30days";
    }
    else{
        flow = "current year"
    }
    await app.memory.set('number', number)
    await app.memory.set('flow', flow)
    await app.memory.set('callNature', callNature)
    app.log(flow)
}
verifyUser()
function verifyUserInput() {
    app.log('in verify user input')
    if (
        (!app.data.message || !app.data.message.trim())
        && (app.source == 'voice')
        && !app.data.event
    ) {
        let message = "<speak>Can you please repeat that again?</speak>"
        let disconnectMessage = "<speak>Sorry! I will call you again later</speak>"
        return app.memory.get('count')
            .then((count) => {
                app.log(count, 'here count')
                if (parseInt(count) < 3) {
                    app.memory.set('count', parseInt(count) + 1)
                    return app.sendTextMessage(app.renderMessage('repeat', {}, `<speak>can you please repeat that again?</speak>`), { ignorei18n: true, text_type: "ssml", options: { recording_max_duration: 6, recording_silence_duration: 6 }, speed: 0.84 }).then(() => {
                        return Promise.reject();
                    })
                }
                else {
                    app.memory.set('dispo', 'No Response')
                    return app.sendTextMessage(app.renderMessage('disconnectMsg', {}, `<speak>can you please repeat that again?</speak>`), { ignorei18n: true, text_type: "ssml", options: { recording_max_duration: 6, recording_silence_duration: 6 }, speed: 0.84, disconnect: true }).then(() => {
                        return Promise.reject();
                    })
                }
            }, () => {
                app.log('no count')
                app.memory.set('count', "1");
                    return app.sendTextMessage(app.renderMessage('repeat', {}, `<speak>can you please repeat that again?</speak>`), { ignorei18n: true, text_type: "ssml", options: { recording_max_duration: 6, recording_silence_duration: 3 }, speed: 0.84 }).then(() => {
                    return Promise.reject();
                })
            })
    }
    else {
        app.memory.delete('count');
        return Promise.resolve();
    }
}
app.setOptions({
    minConfidence: 0.8,
    secondaryModelConfidence: 0.8,
    enableDidYouMean: false,
    excludeParamsForSwitching: ['paylink','busy-customer-response'],
    targetLanguage: "en",
    invalidCount: 1,
    onInvalidCountExceeded: () => {
        return app.executeFunction('unidentifiedResponse')
    },
    text_type: "ssml",
    voiceOptions: {
        capture_dtmf: false,
        tts_engine: "microsoft",
        stt_engine: "microsoft",
        stt_mode: "streaming",
        language: "en-IN",
        text_type: "ssml",
        voice_id: "female",
        speed: 0.84,
        recording_beep: false,
        //boost_phrases: ["asf hike", "ASF hike", "forgot", "pay this", "send the link"],
        "microsoft_stt_options":{
                endpoint_id: "0f736524-9c22-4b25-bdf6-b3dd8119fb15"
        },
        recording_max_duration: 6,
        recording_silence_duration: 6,
        disconnect: false
    },
    initialize: () => {
        return verifyUserInput()
    },
});
function startBot() {
    // return app.start();
    app.log('in start bot')
    //  verifyUser()
    if (app && app.data && !app.data.event) {
        if (app.data.message && app.data.message.toLowerCase().trim() === 'welcome') {
            app.getContext().then(context => {
                app.clearContext();
                app.profile.name = app.sender
                app.updateProfile()
                app.log('in start bot1')
                return app.start();
            }, () => {
                app.log('in start bot2')
                return app.start();
            })
        }
        else if (app.data && app.data.message) {
            let regex = /[.,?!\s]/g;
            app.data.message = app.data.message.replace(regex, ' ').replace(/  +/g, ' ').trim();
            app.log('in start bot3')
            return app.start();
        }
        else {
            app.log('in start bot4')
            return app.start();
        }
    }
}
if (app.data && app.data.event && app.data.event.code == 'callbackStatus') {
    let calldata = app.data.event.data;
    if (app.data.event.data && app.data.event.data.status && app.data.event.data.status == 'answered' && app.data.event.data.bot_failed == false) {
        const temp = async () => {
            app.log('getting dispo');
            let res = await app.memory.get('dispo');
            let main = await app.memory.get('maindispo');
            app.log(res)
            app.log(main)
            let table = "ivr_call_records";
            let record = {
                sid: calldata.sid,
                status: calldata.status,
                phone_no: calldata.phone_no,
                start_time: calldata.start_time,
                ringing_time: calldata.ringing_time,
                duration: calldata.duration,
                caller_id: calldata.caller_id,
                dail_time: calldata.dial_time,
                pick_time: calldata.pick_time,
                end_time: calldata.end_time,
                telco_code: calldata.telco_code,
                telco_text: calldata.telco_text,
                recording_url: calldata.recording_url,
                bot_failed: calldata.bot_failed.toString(),
                chaturl: app.getSessionMessageLogUrl(),
                disposition: res,
                main_disposition: main
            }
            try {
                app.datastore.insert({ table, record });
            }
            catch (error) {
                app.log(error, " Error while creating call records from Main-- ")
            }
        }
        let dispo = temp()
        app.log(dispo, "disposition")
    }
    else {
        let dispo = "Not Answered";
        let table = "ivr_call_records";
        let record = {
            sid: calldata.sid,
            status: calldata.status,
            phone_no: calldata.phone_no,
            start_time: calldata.start_time,
            ringing_time: calldata.ringing_time,
            duration: calldata.duration,
            caller_id: calldata.caller_id,
            dail_time: calldata.dial_time,
            pick_time: calldata.pick_time,
            end_time: calldata.end_time,
            telco_code: calldata.telco_code,
            telco_text: calldata.telco_text,
            recording_url: calldata.recording_url,
            bot_failed: calldata.bot_failed.toString(),
            chaturl: app.getSessionMessageLogUrl(),
            disposition: 'NA',
            main_disposition: "Not Answered"
        }
        try {
            app.datastore.insert({ table, record });
        }
        catch (error) {
            app.log(error, " Error while creating call records from Main-- ")
        }
    }
}
startBot()