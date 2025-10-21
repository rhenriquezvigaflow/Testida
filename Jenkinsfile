pipeline {
    agent any
    tools {
        nodejs 'NodeJS 14.21.3'
    }

    environment {
            currentEnvName = envName(env.BRANCH_NAME)
            installNeeded = requireInstall(env.BRANCH_NAME)

            urlService = serviceEndpoint(env.BRANCH_NAME)

            REACT_APP_API_KEY = credentials('REACT_APP_API_KEY')
    }
    
    stages {
        stage('Create Environment') {
            steps {
                echo "Nombre Ambiente: ${currentEnvName}"

                echo "URL Services: ${urlService}"

                sh 'node --version'
            }
        }

        stage('Build') {
            steps {

                echo "configuring service endpoint... ${env.BUILD_ID} on ${env.JENKINS_URL} ${env.JOB_NAME}"
                script{
                    def text = readFile file: "${env.WORKSPACE}/src/config/url.js"
                    text = text.replaceAll("REPLACE_URL_SERVICE", "${urlService}")
                    writeFile file: "${env.WORKSPACE}/src/config/url.js", text: text
                }

                echo "building... ${env.BUILD_ID} on ${env.JENKINS_URL} ${env.JOB_NAME}"
                sh 'npm install --force'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo "deploying... ${env.BUILD_ID} on ${env.JENKINS_URL} ${env.JOB_NAME}"
                ftpPublisher alwaysPublishFromMaster: true,
                 continueOnError: false,
                 failOnError: false,
                 masterNodeName: '',
                 paramPublish: null,
                 publishers: [[configName: ftpName(env.BRANCH_NAME), transfers: [[asciiMode: false, cleanRemote: true, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: 'build', sourceFiles: 'build/,build//']], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false]]

            }
        }
    }
}


def ftpName(branch){
    if (branch.startsWith("dev")) {
        return 'frontidadev'
    } else if (branch == 'qa') {
        return "frontidaqa"
    } else if (branch == 'main') {
        return "frontida"
    }
}


def envName(branch) {
    if (branch.startsWith("dev")) {
        return "desarrollo"
    } else if (branch == 'qa') {
        return "qa"
    } else if (branch == 'main') {

        return "produccion"
    }

}

def requireInstall(branch) {
    def res = 'false'
    if (branch.startsWith("dev")) {
        res = 'true'
    } else if (branch == 'qa') {
        res = 'true'
    } else if (branch == 'main') {

        res = 'true'
    }
    return res;
}

def serviceEndpoint(branch) {
    def res = 'https://developer.plcapi.vigalab.com/'
    if (branch.startsWith("dev")) {
        res = 'https://developer.plcapi.vigalab.com/'
    } else if (branch == 'qa') {
        res = 'https://qa.plcapi.vigalab.com/'
    } else if (branch == 'main') {
        res = 'https://plcapi.vigalab.com/'
    }
    return res;
}

