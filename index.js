const notifier = require('node-notifier');

const sleep = ms => new Promise(res => setTimeout(res, ms))
const minToMil = minutes => minutes * 60000;

const rounds = process.argv.length === 3 && Number.isInteger(parseInt(process.argv[2])) ? process.argv[2] : 1;
const plural = rounds == 1;

console.log("Number of rounds: " + rounds)

const notify = (message) => {
    notifier.notify({
        title: 'Pomodoro',
        appID: 'Pomodoro Timer',
        icon: 'res/shifaaz-shamoon-9K9ipjhDdks-unsplash.jpg',
        message: message
    })    
}

async function session() {
    
    notify('Starting Pomodoro session: work for 25 minutes, take a 5-minute break, then repeat.');

    for  (let i = 0 ; i < rounds; i++)
    {
        if(i > 0)
            notify('Start working again')

        await sleep(minToMil(25));

        notify('Take a 5 minute break')
        await sleep(minToMil(5));
    }

    notify(`Well done! You completed ${rounds} Pomodoro session${plural ? "" : "s"}`)
}


session();


