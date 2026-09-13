pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    options {
        skipDefaultCheckout(false)
        timestamps()
        disableConcurrentBuilds()
    }

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'

                bat '''
                    npm config set registry https://registry.npmjs.org/
                    npm config set fetch-retries 5
                    npm config set fetch-retry-factor 2
                    npm config set fetch-retry-mintimeout 20000
                    npm config set fetch-retry-maxtimeout 120000
                    npm ci --no-audit --no-fund
                '''
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint...'
                bat 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Next.js application...'
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'

                bat '''
                    docker build --network=default -t portfolio:latest .
                '''
            }
        }

        stage('Docker Verify') {
            steps {
                echo 'Verifying Docker image...'

                bat '''
                    docker images portfolio:latest
                '''
            }
        }
    }

    post {

        success {
            echo 'CI Pipeline completed successfully!'
            echo 'Docker image portfolio:latest created successfully.'
        }

        failure {
            echo 'CI Pipeline failed!'
        }

        always {
            echo 'Pipeline finished. Cleaning workspace...'
            cleanWs()
        }
    }
}