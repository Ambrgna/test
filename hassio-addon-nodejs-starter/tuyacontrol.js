const TuyAPI = require('tuyapi');

var args = process.argv.slice(2);

app = function() {
    const device = new TuyAPI({
    ip: 'xx.xx.xx.xx',
    id: 'xxxxx',
    key: 'xxxxx',
    version: 3.3});

    // Find device on network
    device.find().then(() => {
        // Connect to device
        device.connect();
    });
    
    // Add event listeners
    device.on('connected', () => {
        console.log('Connected to device!');
    });
    
    device.on('disconnected', () => {
        console.log('Disconnected from device.');
    });
    
    device.on('error', error => {
        console.log('Error!', error);
    });
    
    device.on('data', data => {
        console.log('Data from device:', data);
    
        console.log(`Boolean status of default property: ${data.dps['1']}.`);
        console.log(args[0])
        if (args[0] == 'status') {
            if (data.dps['1'] == true ) {
                process.exit()
            } else {
                process.exit(1)
            }
        }
    
        if (args[0] == 'on') {
            device.set({set: true});
        }

        if (args[0] == 'off') {
            device.set({set: false});
        }

        process.exit(0)
    });
}

for (i=0; i< 15; i++) {
    setTimeout(app, i * 2000);
}
