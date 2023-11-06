
    const songsData = [
        //1946
        { group: 'Édith Piaf', album: 'Chansons françaises (100 tubes) [Remasterisées]', name: "La vie en rose", year: '1946', cover: 'album/Chansons françaises (100 tubes) [Remasterisées].webp' },

        //1965
        { group: 'Charles Aznavour', album: 'Best of 40 Chansons', name: "La Bohème", year: '1965', cover: 'album/Best of 40 Chansons.png' },

        //1975
        { group: 'Queen', album: 'A night at the Opera', name: "Bohemian Rhapsody", year: '1975', cover: 'album/Queen-A-night-at-the-Opera.png' },
        { group: 'AC/DC', album: 'High Voltage', name: "T.N.T.", year: '1975', cover: 'album/ACDC-HIGH-VOLTAGE-1.png' },

        //1977
        { group: 'Queen', album: 'News of the World', name: "We Will Rock You", year: '1977', cover: 'album/News-of-the-world.png' },
        { group: 'Queen', album: 'News of the World', name: "We Are the Champions", year: '1977', cover: 'album/News-of-the-world.png' },

        //1979
        { group: 'Jacques Higelin', album: 'Tombé du ciel', name: "Tombé du ciel", year: '1979', cover: 'album/Tombé du ciel.webp' },

        //1980
        { group: 'AC/DC', album: 'Back in Black', name: "Back in Black", year: '1980', cover: 'album/ACDC_Back_in_Black_cover.png' },
        { group: 'Depeche Mode', album: 'Speak and Spell', name: "Just Can't Get Enough", year: '1981', cover: 'album/Speak and Spell.png' },

        //1984

        { group: 'Depeche Mode', album: 'Some Great Reward', name: "People Are People", year: '1984', cover: 'album/Depeche_Mode_-_Some_Great_Reward.png' },
        { group: 'Tears for Fears', album: 'Songs from the Big Chair', name: "Shout", year: '1984', cover: 'album/TEARS-FOR-FEARS-SONGS-FROM-THE-BIG-CHAIR.png' },

        //1989
        { group: 'The Cure', album: 'Greatest Hits', name: "Lullaby", year: '1989', cover: 'album/The Cure- Greatest Hits.webp.png' },
        { group: 'Depeche Mode', album: 'Violator', name: "Personal Jesus ", year: '1989', cover: 'album/violator.png' },

        //1990
        { group: 'Depeche Mode', album: 'Violator', name: "Enjoy the Silence", year: '1990', cover: 'album/violator.png' },

        //1999
        { group: 'Red Hot Chili Peppers', album: 'Californication', name: "Californication", year: '1999', cover: 'album/Californication.png' },

        //2003
        { group: 'Red Hot Chili Peppers', album: 'By the Way', name: "Can't Stop", year: '2003', cover: 'album/RED HOT CHILI PEPPERS - BY THE WAY.png' },
        { group: 'Run-DMC', album: 'The Greatest Hits', name: "It's Tricky", year: '2003', cover: 'album/The Greatest Hits.webp' },
        //2005
        { group: 'Michael Bublé', album: "It's Time (Deluxe Version)", name: "Feeling Good", year: '2005', cover: "album/It's Time (Deluxe Version).webp" },
        { group: 'Michael Bublé', album: "It's Time (Deluxe Version)", name: "Home", year: '2005', cover: "album/It's Time (Deluxe Version).webp" },

        //2007
        { group: 'Mika', album: 'Life in Cartoon Motion', name: "Relax, Take It Easy", year: '2007', cover: 'album/Life in Cartoon Motion.png' },
        //2009
        { group: "Mozart l'Opéra Rock", album: "Mozart l'Opéra Rock", name: "L'assasymphonie", year: '2009', cover: 'album/Mozart l Opéra Rock.webp' },

        //2011
        { group: 'Coldplay', album: 'Mylo Xyloto', name: "Paradise", year: '2011', cover: 'album/Mylo Xyloto.png' },
        { group: 'Jeremy Soule', album: 'The Elder Scrolls V: Skyrim (Original Game Soundtrack)', name: "Dragonborn", year: '2011', cover: 'album/The Elder Scrolls V: Skyrim (Original Game Soundtrack).webp' },

        //2012
        { group: 'Muse', album: 'The 2nd Law', name: "Madness", year: '2012', cover: 'album/The 2nd Law.png' },

        //2013
        { group: 'Daft Punk', album: 'Random Access Memories', name: "Get Lucky", year: '2013', cover: 'album/Random Access Memories.png' },
        { group: 'Stromae', album: 'Racine carrée', name: "Carmen", year: '2013', cover: 'album/Racine carrée.webp' },

        { group: 'Capital Cities', album: 'In a Tidal Wave of Mystery', name: "Safe and Sound", year: '2013', cover: 'album/In a Tidal Wave of Mystery.png' },

        { group: 'Depeche Mode', album: 'Delta Machine', name: "Welcome to My World", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Angel", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Heaven", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Secret to the End", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "My Little Universe", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Slow", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Broken", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "The Child Inside", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Soft Touch/Raw Nerve", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Should Be Higher", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Alone", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Soothe My Soul", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        { group: 'Depeche Mode', album: 'Delta Machine', name: "Goodbye", year: '2013', cover: 'album/Depeche-Mode-Delta-Machine1.png' },
        //2014
        { group: 'Walk the Moon', album: 'Talking Is Hard', name: "Shut Up and Dance", year: '2014', cover: 'album/Walk_the_Moon-Talking_Is_Hard.png' },
        { group: 'Royal Blood', album: 'Royal Blood', name: "Figure It Out", year: '2014', cover: 'album/Royal Blood.png' },
        { group: 'Omi', album: 'Me 4 U', name: "Cheerleader", year: '2014', cover: 'album/OMI_-_Me_4_U.png' },
        //2015
        { group: 'Jakubi', album: 'Jakubi - Single', name: "cant afford it all", year: '2015', cover: 'album/Jakubi - Single.webp' },
        { group: 'Jakubi', album: 'Couch Potato - Single', name: "Couch Potato", year: '2015', cover: 'album/Couch Potato.webp' },

        //2016
        { group: 'Depeche Mode', album: 'Spirit', name: "Where's the Revolution", year: '2016', cover: 'album/Spirit.png' },
        { group: 'Depeche Mode', album: 'Spirit', name: "Going Backwards", year: '2016', cover: 'album/Spirit.png' },
        { group: 'Depeche Mode', album: 'Spirit', name: "Scum", year: '2016', cover: 'album/Spirit.png' },

        { group: 'Christopher Tin', album: 'Bande original', name: "Sogno di volare: Civilization VI Main Theme (Original Game Soundtrack)", year: '2016', cover: 'album/Sogno di volare: Civilization VI Main Theme (Original Game Soundtrack).webp' },
        //2017
        { artiste1: "Andrea Santamaria", album: 'Coco (Bande Originale du Film)', name: "Un Poco loco", year: '2017', cover: 'album/Coco (Bande Originale du Film).webp' },

        //2018
        { group: 'MGMT', album: 'Little Dark Age', name: "Little Dark Age", year: '2018', cover: 'album/MGMT_-_Little_Dark_Age.png' },
        //2019
        { group: 'Au/Ra', album: 'Dance in the Dark - Single', name: "Dance in the DarK", year: '2019', cover: 'album/Dance in the Dark - Single.webp' },

        //2020
        { group: 'Dua Lipa', album: 'Levitating', name: "Levitating", year: '2020', cover: 'album/Levitating.png' },
        //2021
        { group: 'Arden Jones', album: 'Parallel Parking - Single', name: "Parallel Parking", year: '2021', cover: 'album/Parallel Parking - Single.webp' },
        //
        //2022
        { group: 'JVKE', album: 'this is what ____ feels like (Vol. 1-4)', name: "golden hour", year: '2022', cover: 'album/this is what ____ feels like (Vol. 1-4).webp' },
        { group: 'Tai Verdes', album: 'last day on earth - Single', name: "last day on earth ", year: '2022', cover: 'last day on earth - Single.webp' },
        { group: 'Mareux', album: 'The Perfect Girl (Instrumental) - Single', name: "The Perfect Girl (Instrumental) ", year: '2022', cover: 'The Perfect Girl (Instrumental) - Single.webp' },
        { group: 'FOVOS', album: 'Psychopath - Single', name: "The Perfect Girl (Instrumental) ", year: '2022', cover: 'Psychopath - Single.webp' },

        //2023
        { group: 'Depeche Mode', album: 'Memento Mori', name: "My Cosmos Is Mine", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Wagging Tongue", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Ghosts Again", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Don't Say You Love Me", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "My Favourite Stranger", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Soul with Me", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Caroline's Monkey", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Before We Drown", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "People Are Good", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Always You", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Never Let Me Go", year: '2023', cover: 'album/Memento-Mori.png' },
        { group: 'Depeche Mode', album: 'Memento Mori', name: "Speak to Me", year: '2023', cover: 'album/Memento-Mori.png' },

        { group: 'Kenya Grace', album: 'Strangers (Deep House Remix)', name: "Strangers", year: '2023', cover: 'album/Kenya_Grace_-_Strangers.png' },

        { group: 'Fifty Fifty', album: 'The Beginning', name: "Cupid", year: '2023', cover: 'album/The Beginning.png' },

        { group: 'Apel8', album: 'Heat', name: "Heat", year: '2023', cover: 'album/Heat (feat. Dro Kenji).png' },
    ];

    const groupColors = {
        'Queen': 'rgba(255, 0, 0, 0.8)', // Rouge
        'Kenya Grace': 'rgba(0, 128, 255, 0.8)', // Bleu
        'Depeche Mode': 'rgba(255, 255, 0, 0.8)', // Jaune
        'Daft Punk': 'rgba(0, 204, 153, 0.8)', // Turquoise
        'AC/DC': 'rgba(153, 0, 0, 0.8)', // Rouge foncé
        'Mika': 'rgba(255, 128, 0, 0.8)', // Orange
        'Dua Lipa': 'rgba(128, 0, 255, 0.8)', // Violet
        'Coldplay': 'rgba(0, 204, 0, 0.8)', // Vert
        'Muse': 'rgba(255, 51, 51, 0.8)', // Rouge vif
        'Fifty Fifty': 'rgba(0, 102, 255, 0.8)', // Bleu vif
        'Tears for Fears': 'rgba(0, 77, 64, 0.8)', // Vert foncé
        'Walk the Moon': 'rgba(51, 51, 102, 0.8)', // Bleu foncé
        'MGMT': 'rgba(255, 102, 0, 0.8)', // Orange foncé
        'Omi': 'rgba(0, 102, 204, 0.8)', // Bleu foncé
        'Capital Cities': 'rgba(0, 179, 179, 0.8)', // Turquoise foncé
        'Charles Aznavour': 'rgba(230, 230, 0, 0.8)', // Jaune vif
        'Royal Blood': 'rgba(128, 0, 0, 0.8)', // Rouge foncé
        'Red Hot Chili Peppers': 'rgba(204, 0, 102, 0.8)', // Rose
        'Apel8': 'rgba(255, 102, 0, 0.8)', // Orange vif
        'Run-DMC': 'rgba(0, 102, 0, 0.8)', // Vert foncé
        'Édith Piaf': 'rgba(0, 102, 204, 0.8)', // Bleu foncé
        'The Cure': 'rgba(179, 17, 255, 0.8)', // Violet vif
        'Jacques Higelin': 'rgba(255, 51, 128, 0.8)', // Rose vif
        'JVKE': 'rgba(0, 255, 179, 0.8)', // Turquoise vif
        "Mozart l'Opéra Rock": 'rgba(77, 179, 255, 0.8)', // Bleu clair
        "Stromae": 'rgba(102, 179, 77, 0.8)', // Vert clair
        "Michael Bublé": 'rgba(255, 179, 102, 0.8)', // Orange clair
        "Christopher Tin": 'rgba(179, 255, 77, 0.8)', // Jaune clair
        "Jeremy Soule": 'rgba(153, 128, 179, 0.8)', // Violet clair
        "Au/Ra": 'rgba(255, 128, 179, 0.8)', // Rose clair
        "Jakubi": 'rgba(128, 179, 255, 0.8)', // Bleu clair
        "Arden Jones": 'rgba(128, 179, 255, 0.8)', // Bleu clair
        "Tai Verdes": 'rgba(128, 179, 255, 0.8)', // Bleu clair
        "Mareux": 'rgba(128, 179, 255, 0.8)', // Bleu clair
        "FOVOS": 'rgba(128, 179, 255, 0.8)', // Bleu clair
    };