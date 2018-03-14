module.exports = {
    "prompts": {
        "name": {
            "type"    : "string",
            "required": false,
            "message" : "Project name",
            "default" : "vue-startup"
        },
        "author": {
            "type"   : "string",
            "message": "Author"
        },
        "version": {
            "type"    : "string",
            "message" : "Project version",
            "default" : "0.0.1"
        },
        "description": {
            "type"    : "string",
            "required": false,
            "message" : "Project description",
            "default" : "A new Vue.js project"
        },
        "port": {
            "type"    : "string",
            "required": false,
            "message" : "client port",
            "default" : 8080
        },
        "state": {
            "type": "confirm",
            "message": "Use state management tools?"
        },
        "stateConf": {
            "when": "state",
            "type": "list",
            "message": "state manage for your app",
            "choices": [
                {
                  "name": "Vuex (https://github.com/vuejs/vuex)",
                  "value": "vuex",
                  "short": "vuex"
                },
                {
                  "name": "Mobx (https://github.com/mobxjs/mobx)",
                  "value": "mobx",
                  "short": "mobx"
                }
            ]
        }
    },
    "filters": {
       "src/vuex/**/*": "state && stateConf === 'vuex'",
       "src/mobx/**/*": "state && stateConf === 'mobx'",
       "src/pages/counter/**/*": "state"
    },
    "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/dwqs/webpack-mpvue-startup"
  }
  
