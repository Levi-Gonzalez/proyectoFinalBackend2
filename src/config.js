export default {
    fileSystem: {
        path: './db'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://admin:admin@cluster0.bev71ps.mongodb.net/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "proyectobackend-f2633",
        "private_key_id": "45ff750ddaf3d7f268b321c1e2f7834794418677",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkuRHQB++f2HBl\n04XjD39SZ7VjW8y26hIgaZBRNmZhnIbH8nm/k+xfL4CxO1GGMjY+mxsLWbZfL8eq\nZHBUFvpNfW0hSDjPURF1gxo2XvmM8yXSsIKGfLKD6LVM96oiwRRdPuXmZj5opBSe\nY7vJ3UCxwm5K8LaYworHH/dKIAY40LNCRHMTTsliiN1/QZ4JsIiouIsiSEhuSkkX\nR83l2ecyMdh/Xtey8VmKd5GKJzbcvEgfsMRCim1Pzy/Id2y+tOewMnQaDgJcPZ2L\nP+gV3VCA4yDVQ9i2Iv4kkokZuMvhBH8vLH5io1mE+ETZQevIdBUkRaNtG3vqMbzz\n4NK8+dP3AgMBAAECggEAGSAjn+w9+E9O4bFQiFBqVtr714J+qN3uUuRXP5QBLN1v\nz5rkSD0bfm9j/WSzbDlHfegxyVrvTvieR5bXbXQtzNkXZs6536GZfKe5PVbiUMYb\n3FXRKwtlPWqnEOzsFi4GWazI64pn9ZUlkf1bfRCTGCo0oZiy+X0fJv1wvm1BFbQ8\nuxU2XjunUFkBbKO2YqiTbVfZJzbsiKLXigqcPM1MC84jIDpQ1Nn8ivPKg9m8whxZ\nzYJzHQZ8jgSBYC3nk1G4F2tjXzmUOqKWuM49+SSSHxA1UCb/EUNsSoSWM0H9+Ar2\nHQmF/YK26OADiFfrEpA/6oQu9T4o4dKW1x/HlTduRQKBgQDmfjUoDq1DohibGZpu\n1tjoqbN/nrx0+dCIcToWwvM4w3S7GePvN4c+Y1uc4MVcLQYPGfyc1ywuYacz0xQv\nAeDgJSyXHqEk+4nJPqINHnlFngKZPDAgPlZ9YMTZqqq0QyBM/UrYamXClHtC1iUU\nUKS0Uy4oyYeI9GdUWaLtJhgUtQKBgQC28532OmwJdWVk6gxDJrrw1TtMM1L7BPBe\nZyDm81ThcWkBAyfu/ssJ6B2LV1ZkNdyPw28fMxcDLzoeOz3iS4oZQssYkkAgiCHS\nzcoGDnAPJY3rF6QzYmPWd33rq4naxNtyVSDwrtcNqQdJK5oIgnfLypjoTGbpmbon\n0bUtls39ewKBgQChcL6sqvMCzzNq11kKz2MoO0ylU7puOFeuaZglPzD6jjRhpHW5\nJOyObytIy0qREFwREcOU20VvyyhArVSSxD8M4BzGUEbQT3qnwT3h8HlCoLTzPWv7\n+Y28zZ2zU82y6t1h73uP754M1tEq9DEOdJmYUDahjN5ot770HsB2WFs/jQKBgCwz\nq+SDtPqMDJVXHuNShjQNsKf2doQDa3fDfuWNwOI/HlmKQ6mwkamxFQJHda38fW+W\njlCBbXvteyM2uPrluVXlF2C2ZRv3CAUAh2DzOAvQzPsR2TA5A1obwKah6Uqb6VE0\nVCMSew7n2cTJ7gtESmFIb60gWHT0GU/pkNaU6uvlAoGAY2VxsV5vdJAlWEeTpLsz\nN3wYWMvNJpfxgQoP1d0O7KnXdzgCaPWcy61zL4myc9ml1qZZ+Oau+I/HbNh3MEiQ\n31dun8gtJfrrPFeN1mRj43ac/Aoj4thucgfPNZsJx539ohyJcAdQDxY0TucV6SnA\nwtIDsNPWBf2AjqTmnSLImVs=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-nnsja@proyectobackend-f2633.iam.gserviceaccount.com",
        "client_id": "117217481402545978729",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nnsja%40proyectobackend-f2633.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './db/ecommerce.sqlite'
        },
        useNullAsDefault: true
    },

}