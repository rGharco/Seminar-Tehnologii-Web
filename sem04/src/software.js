class Software {
    constructor(softName) {
        this.softName = softName;
    }

    run() {
        console.log(`${this.softName} is running!`);
    }
}

class BrowserPlugin {
    constructor(plugName) {
        this.plugName = plugName;
    }
}

class Browser extends Software {
    constructor(softName) {
        super(softName);
        this.plugins = [];
    }

    addPlugin(plugin) {
        this.plugins.push(plugin);
    }

    installPlugin(plugin) {
        console.log(`Plugin: ${plugin.plugName} is currently installing...`);
    }
}

let plugin = new BrowserPlugin("Ad Blocker");
let plugin2 = new BrowserPlugin("Video Player");

let Brave = new Browser("Brave");

Brave.addPlugin(plugin);
Brave.addPlugin(plugin2);

Brave.plugins.forEach(element => {
    Brave.installPlugin(element);
});