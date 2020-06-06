const employees = [
    {
        name: 'Бербека О.',
        id: 'berbeka',
        defaultOperations: [
            'obrobkaNyzuPidzhakiv1Shlitsa',
            'obrobkaNyzuPidzhakiv2Shlitsy',
            'znimanniaTsinnykivZNyzuPidklady',
            'rozpuskanniaPidklady',
            'namitkaPetelNaRukavakh',
            'vshyvanniaPidklady',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Бира М.',
        id: 'byra',
        defaultOperations: [
            'stupinchastaObrizkaBortiv',
            'rozprasuvanniaBortivPriami',
            'rozprasuvanniaBortivHostri',
            'vyvertanniaBortivPriami',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Бурбіль М.',
        id: 'burbil',
        defaultOperations: [
            'vyvertanniaBortivPriami',
            'vyvertanniaBortivHostri',
            'zaprasuvanniaPerekantuBortivHostri',
            'zaprasuvanniaPerekantuBortivPd',
            'zaprasuvanniaPerekantuBortivPriami',
            'prasuvanniaOzdobliuiuchoiStrochkyPoBortakhNa01Sm',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Бухонок В.',
        id: 'byhanok',
        defaultOperations: [
            'rozprasuvanniaLiktovohoShvaRukaviv',
            'sprasuvanniaOkatuRukaviv',
            'povisytyRukavaNaPryshchepky',
            'namitkaPetelNaRukavakh',
            'prasuvanniaOzdobliuiuchoiStrochkyPoBortakhNa01Sm',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Вижбіцька Х.',
        id: 'vyzhbitska',
        defaultOperations: [
            'zakripkyNaPetliakhRukaviv',
            'namitkaPetelPoBorti1',
            'namitkaPetelPoBorti2',
            'namitkaPetelPoBorti3',
            'namitkaPetelPoBorti4',
            'obmetkaPetelPoBorti1',
            'obmetkaPetelPoBorti2',
            'obmetkaPetelPoBorti3',
            'obmetkaPetelPoBorti3Klitka',
            'obmetkaPetelPoBorti4',
            'zakripkyNaPetliakhBortiv2',
            'zakripkyNaPetliakhBortiv3',
            'kontrastniPetliPoLatskanu1',
            'kontrastniPetliPoLatskanu2',
            'zaminaNytokNaPetliakh',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Гадьо О.',
        id: 'hado',
        defaultOperations: [
            'obshyvanniaBortivHostri',
            'obshyvanniaBortivPriami',
            'obshyvanniaBortivPd',
            'obshyvanniaBortivShalka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Дацко Н.',
        id: 'datsko',
        defaultOperations: [
            'zapuskRukaviv',
            'komplektatsiiaRukaviv',
            'obmetkaPetelNaRukavakh',
            'kontrastniPetliNaRukavakh',
            'zakripkyNaPetliakhRukaviv',
            'zakripkyNaNalokotnik',
            'zakripkaNa1SmPoLoktovomuShviRukava',
            'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa01Sm',
            'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa05Sm',
            'prostrochytyOzdobliuiuchuStrochkuPoBortiTopTopKomiruILatskanu',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Дзюб М.',
        id: 'dziub',
        defaultOperations: [
            'vshyvanniaProimyPidkladyRukaviv',
            'narizanniaTasmyVishaka',
            'obrizkaPlechyka',
            'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa01Sm',
            'nastrochuvanniaNalokotnika',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Діжак В.',
        id: 'dizhak',
        defaultOperations: [
            'vshyvanniaProimyPidkladyRukaviv',
            'obrizkaPlechyka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Драгой О.',
        id: 'drahoi',
        defaultOperations: [
            'sprasuvanniaProimyRukaviv',
            'pryshyvanniaPlechyka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Кондюх А.',
        id: 'kondiukh',
        defaultOperations: [
            'zshyvanniaKutykivRukaviv',
            'zshyvanniaLiktovohoShvaRukaviv',
            'zshyvanniaLiktovohoShvaRukavivKlitka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Мерцало Г.',
        id: 'mertsalo',
        defaultOperations: [
            'poprasuvatyPetliNaRukavakh',
            'nastrochuvanniaNalokotnika',
            'zshyvanniaPerednohoShvaRukaviv',
            'zaprasuvanniaShlitsyRukaviv',
            'zaprasuvanniaRukavkyPoNyzu',
            'roztiahuvanniaPerednohoZrizuRukaviv',
            'znimanniaTsinnykivNaRukavakh',
            'prostrochytyOzdobliuiuchuStrochkuPoRukavakhNa35Sm',
            'pererobky',
            'probni'
        ]
    },

    {
        name: 'Музика І.',
        id: 'muzyka',
        defaultOperations: [
            'narizanniaRukavnoiBirky',
            'obshyvanniaBortivHostri',
            'obshyvanniaBortivPriami',
            'obshyvanniaBortivPd',
            'obshyvanniaBortivShalka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Палиг К.',
        id: 'palyh',
        defaultOperations: [
            'obrobkaNyzuPidzhakiv1Shlitsa',
            'obrobkaNyzuPidzhakiv2Shlitsy',
            'znimanniaTsinnykivZNyzuPidklady',
            'namitkaPetelNaRukavakh',
            'rozpuskanniaPidklady',
            'vshyvanniaPidklady',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Пасемко В.',
        id: 'pasemko',
        defaultOperations: [
            'vshyvanniaRukavivZvychaini',
            'vshyvanniaRukavivKlitka',
            'znimanniaZPryshchepokRukaviv',
            'pidbirRukaviv',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Пилипець Н.',
        id: 'pylypets',
        defaultOperations: [
            'obrobkaNyzuPidzhakiv1Shlitsa',
            'obrobkaNyzuPidzhakiv2Shlitsy',
            'znimanniaTsinnykivZNyzuPidklady',
            'namitkaPetelNaRukavakh',
            'rozpuskanniaPidklady',
            'vshyvanniaPidklady',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Пиріг М.',
        id: 'pyrih',
        defaultOperations: [
            'rozprasuvanniaPerednohoShvaRukaviv',
            'zshyvanniaLiktovohoShvaPidkladyRukaviv',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Пуха Л.',
        id: 'pukha',
        defaultOperations: [
            'zshyvanniaPerednohoShvaPidkladyRukaviv',
            'roztiahuvanniaPerednohoZrizuRukaviv',
            'zakripkaProimy',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Різничок М.',
        id: 'riznychok',
        defaultOperations: [
            'zshyvanniaPerednohoShvaPidkladyRukaviv',
            'zakripkaProimy',
            'nastrochuvanniaVishakaTasma',
            'nastrochuvanniaVishakaBirka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Сиглович Л.',
        id: 'syhlovych',
        defaultOperations: [
            'nastrochuvanniaVishakaTasma',
            'nastrochuvanniaVishakaBirka',
            'zakripkyNaPetliakhRukaviv',
            'zakripkyNaPetliakhBortiv3',
            'roztiahuvanniaPerednohoZrizuRukaviv',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Славич С.',
        id: 'slavych',
        defaultOperations: [
            'nastrochuvanniaPidokatnykaNaRukav',
            'zshyvanniaLiktovohoShvaPidkladyRukaviv',
            'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa01Sm',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Софіян Н.',
        id: 'sofiian',
        defaultOperations: [
            'vyvertanniaBortivPriami',
            'vyvertanniaBortivHostri',
            'zaprasuvanniaPerekantuBortivHostri',
            'zaprasuvanniaPerekantuBortivPd',
            'zaprasuvanniaPerekantuBortivPriami',
            'prasuvanniaOzdobliuiuchoiStrochkyPoBortakhNa01Sm',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Стех Н.',
        id: 'stekh',
        defaultOperations: [
            'zaprasuvanniaNyzuPidzhaka1Shlitsa',
            'zaprasuvanniaNyzuPidzhaka1ShlitsaKlitka',
            'zaprasuvanniaNyzuPidzhaka2Shlitsy',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Стукалова С.',
        id: 'stukalova',
        defaultOperations: [
            'zahotovkaPidokatnykaMali',
            'zahotovkaPidokatnykaVelyki',
            'komplektatsiiaPidokatnyka',
            'stupinchastaObrizkaBortiv',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Теслюк О.',
        id: 'tesliuk',
        defaultOperations: [
            'zshyvanniaKutykivRukaviv',
            'vyvertanniaIPrasuvanniaKutykivRukaviv',
            'zapuskPidkladyRukaviv',
            'zshyvanniaLiktovohoShvaPidkladyRukaviv',
            'prasuvanniaOzdobliuiuchoiStrochkyPoBortakhNa01Sm',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Франків М.',
        id: 'frankiv',
        defaultOperations: [
            'vshyvanniaRukavivZvychaini',
            'vshyvanniaRukavivKlitka',
            'znimanniaZPryshchepokRukaviv',
            'pidbirRukaviv',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Хмель Г',
        id: 'khmel',
        defaultOperations: [
            'zakripkyNaPetliakhRukaviv',
            'zakripkyNaPetliakhBortiv3',
            'obmetkaPetelPoBorti3',
            'obmetkaPetelPoBorti3Klitka',
            'vishanniaPidzhakaNaVishak',
            'opuskanniaNaVto',
            'kontrolPidzhaka',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Хороз І.',
        id: 'khoroz',
        defaultOperations: [
            'vyvertanniaIPrasuvanniaKutykivRukaviv',
            'presBortivILatskanaHostri',
            'presBortivILatskanaPriami',
            'presBortivILatskanaPd',
            'vozinniaRobotyZBortiv',
            'namitkaPetelPoBorti2',
            'prasuvanniaOzdobliuiuchoiStrochkyPoBortakhNa01Sm',
            'pererobky',
            'probni'
        ]
    },
    {
        name: 'Школьник А.',
        id: 'shkolnyk',
        defaultOperations: [
            'pryshyvanniaPidkladyPoNyzuRukava',
            'pryshyvanniaBirkyDoRukaviv',
            'znimanniaTsinnykivNaRukavakh',
            'pererobky',
            'probni'
        ]
    },
    // {
    //     name: 'Янкевич Н.',
    //     id: 'yankevych',
    //     defaultOperations: [
    //         'zapuskRukaviv',
    //         'komplektatsiiaRukaviv',
    //         'namitkaPetelNaRukavakh',
    //         'obmetkaPetelNaRukavakh',
    //         'kontrastniPetliNaRukavakh',
    //         'pererobky',
    //         'probni'
    //     ]
    // },
    {
        name: 'Яремчук О.',
        id: 'yaremchuk',
        defaultOperations: [
            'poprasuvatyPetliNaRukavakh',
            'zaprasuvanniaShlitsyRukaviv',
            'pryshyvanniaHudzykivNaRukavakhZvychaini',
            'pryshyvanniaHudzykivNaRukavakhStiika',
            'zaprasuvanniaRukavkyPoNyzu',
            'pererobky',
            'probni'
        ]
    }
]

export {employees}