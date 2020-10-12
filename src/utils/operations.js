const operations = [
    {
        index: 1,
        name: 'Запуск рукавів',
        id: 'zapuskRukaviv',
        price: 0.0244,
        unload: false
    },
    {
        index: 2,
        name: 'Комплектація рукавів',
        id: 'komplektatsiiaRukaviv',
        price: 0.0122,
        unload: false
    },
    {
        index: 3,
        name: 'Намітка петель на рукавах',
        id: 'namitkaPetelNaRukavakh',
        price: 0.4644,
        unload: false
    },
    {
        index: 4,
        name: 'Обметка петель на рукавах',
        id: 'obmetkaPetelNaRukavakh',
        price: 0.6609,
        unload: false
    },
    {
        index: 5,
        name: 'Контрастні петлі на рукавах',
        id: 'kontrastniPetliNaRukavakh',
        price: 0.8261,
        unload: false
    },
    {
        index: 6,
        name: 'Закріпки на петлях рукавів',
        id: 'zakripkyNaPetliakhRukaviv',
        price: 0.8388,
        unload: false
    },
    {
        index: 7,
        name: 'Попрасувати петлі на рукавах',
        id: 'poprasuvatyPetliNaRukavakh',
        price: 0.2566,
        unload: false
    },
    {
        index: 8,
        name: 'Розтягування переднього зрізу рукавів',
        id: 'roztiahuvanniaPerednohoZrizuRukaviv',
        price: 0.3813,
        unload: false
    },
    {
        index: 9,
        name: 'Зшивання кутиків рукавів',
        id: 'zshyvanniaKutykivRukaviv',
        price: 0.5847,
        unload: false
    },
    {
        index: 10,
        name: 'Вивертання і прасування кутиків рукавів',
        id: 'vyvertanniaIPrasuvanniaKutykivRukaviv',
        price: 0.7943,
        unload: false
    },
    {
        index: 11,
        name: 'Зшивання ліктьового шва рукавів',
        id: 'zshyvanniaLiktovohoShvaRukaviv',
        price: 0.9914,
        unload: false
    },
    {
        index: 12,
        name: 'Зшивання ліктьового шва рукавів (клітка)',
        id: 'zshyvanniaLiktovohoShvaRukavivKlitka',
        price: 1.2583,
        unload: false
    },
    {
        index: 13,
        name: 'Розпрасування ліктьового шва рукавів',
        id: 'rozprasuvanniaLiktovohoShvaRukaviv',
        price: 0.6477,
        unload: false
    },
    {
        index: 14,
        name: 'Настрочування налокотніка',
        id: 'nastrochuvanniaNalokotnika',
        price: 2.1607,
        unload: false
    },
    {
        index: 15,
        name: 'Запрасування налокотніка',
        id: 'zaprasuvanniaNalokotnika',
        price: 1.16,
        unload: false
    },
    {
        index: 16,
        name: 'Закріпки на налокотнік',
        id: 'zakripkyNaNalokotnik',
        price: 0.4667,
        unload: false
    },
    {
        index: 17,
        name: 'Закріпка на 1см по локтьовому шві рукава',
        id: 'zakripkaNa1SmPoLoktovomuShviRukava',
        price: 0.335,
        unload: false
    },
    {
        index: 18,
        name: 'Оздоблююча строчка топ-топ на налокотніку',
        id: 'ozdobliuiuchaStrochkaTopTopNaNalokotniku',
        price: 0,
        unload: false
    },
    {
        index: 19,
        name: 'Заготовка підокатника (малі)',
        id: 'zahotovkaPidokatnykaMali',
        price: 0.8261,
        unload: false
    },
    {
        index: 20,
        name: 'Заготовка підокатника (великі)',
        id: 'zahotovkaPidokatnykaVelyki',
        price: 0.8261,
        unload: false
    },
    {
        index: 21,
        name: 'Комплектація підокатника',
        id: 'komplektatsiiaPidokatnyka',
        price: 0.1222,
        unload: false
    },
    {
        index: 22,
        name: 'Зібрати підокатник',
        id: 'zibratyPidokatnyk',
        price: 0,
        unload: false
    },
    {
        index: 23,
        name: 'Зібрати рукав по окату',
        id: 'zibratyRukavPoOkatu',
        price: 0,
        unload: false
    },
    {
        index: 24,
        name: 'Настрочування підокатника на рукав',
        id: 'nastrochuvanniaPidokatnykaNaRukav',
        price: 0.9249,
        unload: false
    },
    {
        index: 25,
        name: 'Зшивання переднього шва рукавів',
        id: 'zshyvanniaPerednohoShvaRukaviv',
        price: 0.8643,
        unload: false
    },
    {
        index: 26,
        name: 'Розпрасування переднього шва рукавів',
        id: 'rozprasuvanniaPerednohoShvaRukaviv',
        price: 0.7577,
        unload: false
    },
    {
        index: 27,
        name: 'Запуск підклади рукавів',
        id: 'zapuskPidkladyRukaviv',
        price: 0.0367,
        unload: false
    },
    {
        index: 28,
        name: 'Зшивання ліктьового шва підклади рукавів',
        id: 'zshyvanniaLiktovohoShvaPidkladyRukaviv',
        price: 0.6355,
        unload: false
    },
    {
        index: 29,
        name: 'Зшивання переднього шва підклади рукавів',
        id: 'zshyvanniaPerednohoShvaPidkladyRukaviv',
        price: 0.5592,
        unload: false
    },
    {
        index: 30,
        name: 'Запрасування шліци рукавів',
        id: 'zaprasuvanniaShlitsyRukaviv',
        price: 0.4155,
        unload: false
    },
    {
        index: 31,
        name: 'Пришивання гудзиків на рукавах (звичайні)',
        id: 'pryshyvanniaHudzykivNaRukavakhZvychaini',
        price: 0.9278,
        unload: false
    },
    {
        index: 32,
        name: 'Пришивання гудзиків на рукавах (стійка)',
        id: 'pryshyvanniaHudzykivNaRukavakhStiika',
        price: 1.271,
        unload: false
    },
    {
        index: 33,
        name: 'Запрасування рукавки по низу',
        id: 'zaprasuvanniaRukavkyPoNyzu',
        price: 0.3421,
        unload: false
    },
    {
        index: 34,
        name: 'Пришивання підклади по низу рукава',
        id: 'pryshyvanniaPidkladyPoNyzuRukava',
        price: 1.5794,
        unload: false
    },
    {
        index: 35,
        name: 'Нарізання рукавної бірки',
        id: 'narizanniaRukavnoiBirky',
        price: 0.0733,
        unload: false
    },
    {
        index: 36,
        name: 'Пришивання бірки до рукавів',
        id: 'pryshyvanniaBirkyDoRukaviv',
        price: 0.0635,
        unload: false
    },
    {
        index: 37,
        name: 'Пришивання клейової кромки по низу рукава',
        id: 'pryshyvanniaKleiovoiKromkyPoNyzuRukava',
        price: 0,
        unload: false
    },
    {
        index: 38,
        name: 'Закріпка переднього шва рукавів',
        id: 'zakripkaPerednohoShvaRukaviv',
        price: 0,
        unload: false
    },
    {
        index: 39,
        name: 'Знімання цінників на рукавах',
        id: 'znimanniaTsinnykivNaRukavakh',
        price: 0.097,
        unload: false
    },
    {
        index: 40,
        name: 'Спрасування окату рукавів',
        id: 'sprasuvanniaOkatuRukaviv',
        price: 0.611,
        unload: false
    },
    {
        index: 41,
        name: 'Повісити рукава на прищепки',
        id: 'povisytyRukavaNaPryshchepky',
        price: 0.1099,
        unload: false
    },
    {
        index: 42,
        name: 'Обшивання бортів (гострі)',
        id: 'obshyvanniaBortivHostri',
        price: 3.9029,
        unload: false
    },
    {
        index: 43,
        name: 'Обшивання бортів (прямі)',
        id: 'obshyvanniaBortivPriami',
        price: 3.109,
        unload: false
    },
    {
        index: 44,
        name: 'Обшивання бортів (пд)',
        id: 'obshyvanniaBortivPd',
        price: 3.9029,
        unload: false
    },
    {
        index: 45,
        name: 'Обшивання бортів (шалька)',
        id: 'obshyvanniaBortivShalka',
        price: 0,
        unload: false
    },
    {
        index: 46,
        name: 'Ступіньчаста обрізка бортів',
        id: 'stupinchastaObrizkaBortiv',
        price: 0.788,
        unload: false
    },
    {
        index: 47,
        name: 'Розпрасування бортів (прямі)',
        id: 'rozprasuvanniaBortivPriami',
        price: 0.7372,
        unload: false
    },
    {
        index: 48,
        name: 'Розпрасування бортів (гострі)',
        id: 'rozprasuvanniaBortivHostri',
        price: 0.8134,
        unload: false
    },
    {
        index: 49,
        name: 'Вивертання бортів (прямі)',
        id: 'vyvertanniaBortivPriami',
        price: 0.171,
        unload: false
    },
    {
        index: 50,
        name: 'Вивертання бортів (гострі)',
        id: 'vyvertanniaBortivHostri',
        price: 0.22,
        unload: false
    },
    {
        index: 51,
        name: 'Запрасування переканту бортів (гострі)',
        id: 'zaprasuvanniaPerekantuBortivHostri',
        price: 2.5801,
        unload: false
    },
    {
        index: 52,
        name: 'Запрасування переканту бортів (пд)',
        id: 'zaprasuvanniaPerekantuBortivPd',
        price: 2.5801,
        unload: false
    },
    {
        index: 53,
        name: 'Запрасування переканту бортів (прямі)',
        id: 'zaprasuvanniaPerekantuBortivPriami',
        price: 2.1607,
        unload: false
    },
    {
        index: 54,
        name: 'Запрасування низу піджака (1 шліца)',
        id: 'zaprasuvanniaNyzuPidzhaka1Shlitsa',
        price: 1.4743,
        unload: false
    },
    {
        index: 55,
        name: 'Запрасування низу піджака (1 шліца клітка)',
        id: 'zaprasuvanniaNyzuPidzhaka1ShlitsaKlitka',
        price: 1.6141,
        unload: false
    },
    {
        index: 56,
        name: 'Запрасування низу піджака (2 шліци)',
        id: 'zaprasuvanniaNyzuPidzhaka2Shlitsy',
        price: 1.5888,
        unload: false
    },
    {
        index: 57,
        name: 'Запрасування низу піджака (2 шліци клітка)',
        id: 'zaprasuvanniaNyzuPidzhaka2ShlitsyKlitka',
        price: 1.6777,
        unload: false
    },
    {
        index: 58,
        name: 'Прес бортів і лацкана (гострі)',
        id: 'presBortivILatskanaHostri',
        price: 0.8388,
        unload: false
    },
    {
        index: 59,
        name: 'Прес бортів і лацкана (прямі)',
        id: 'presBortivILatskanaPriami',
        price: 0.8134,
        unload: false
    },
    {
        index: 60,
        name: 'Прес бортів і лацкана (пд)',
        id: 'presBortivILatskanaPd',
        price: 0.8388,
        unload: false
    },
    {
        index: 61,
        name: 'Возіння роботи з бортів',
        id: 'vozinniaRobotyZBortiv',
        price: 0.01222,
        unload: false
    },
    {
        index: 62,
        name: 'Обробка низу піджаків (1 шліца)',
        id: 'obrobkaNyzuPidzhakiv1Shlitsa',
        price: 2.8978,
        unload: false
    },
    {
        index: 63,
        name: 'Обробка низу піджаків (2 шліци)',
        id: 'obrobkaNyzuPidzhakiv2Shlitsy',
        price: 3.6605,
        unload: false
    },
    {
        index: 64,
        name: 'Знімання цінників з низу підклади',
        id: 'znimanniaTsinnykivZNyzuPidklady',
        price: 0.097,
        unload: false
    },
    {
        index: 65,
        name: 'Розпускання підклади',
        id: 'rozpuskanniaPidklady',
        price: 0.445,
        unload: false
    },
    {
        index: 66,
        name: 'Зшивання підклади',
        id: 'zshyvanniaPidklady',
        price: 0.35,
        unload: false
    },
    {
        index: 67,
        name: 'Вшивання рукавів (звичайні)',
        id: 'vshyvanniaRukavivZvychaini',
        price: 2.7253,
        unload: false
    },
    {
        index: 68,
        name: 'Вшивання рукавів (клітка)',
        id: 'vshyvanniaRukavivKlitka',
        price: 3.1222,
        unload: false
    },
    {
        index: 69,
        name: 'Знімання з прищепок рукавів',
        id: 'znimanniaZPryshchepokRukaviv',
        price: 0.038,
        unload: false
    },
    {
        index: 70,
        name: 'Підбір рукавів',
        id: 'pidbirRukaviv',
        price: 0.147,
        unload: false
    },
    {
        index: 71,
        name: 'Спрасування пройми рукавів',
        id: 'sprasuvanniaProimyRukaviv',
        price: 0.788,
        unload: false
    },
    {
        index: 72,
        name: 'Розсікання і розпрасування окату 5х5',
        id: 'rozsikanniaIRozprasuvanniaOkatu5Kh5',
        price: 0,
        unload: false
    },
    {
        index: 73,
        name: 'Пришивання плечика',
        id: 'pryshyvanniaPlechyka',
        price: 0.7706,
        unload: false
    },
    {
        index: 74,
        name: 'Вшивання пройми підклади рукавів',
        id: 'vshyvanniaProimyPidkladyRukaviv',
        price: 2.2243,
        unload: false
    },
    {
        index: 75,
        name: 'Нарізання тасьми вішака',
        id: 'narizanniaTasmyVishaka',
        price: 0.04,
        unload: false
    },
    {
        index: 76,
        name: 'Обрізка плечика',
        id: 'obrizkaPlechyka',
        price: 0.16,
        unload: false
    },
    {
        index: 77,
        name: 'Зшивання дирки спинки підклади',
        id: 'zshyvanniaDyrkySpynkyPidklady',
        price: 0,
        unload: false
    },
    {
        index: 78,
        name: 'Закріпка пройми',
        id: 'zakripkaProimy',
        price: 1.3726,
        unload: false
    },
    {
        index: 79,
        name: 'Зшивання дирок в рукавах',
        id: 'zshyvanniaDyrokVRukavakh',
        price: 0,
        unload: false
    },
    {
        index: 80,
        name: 'Настрочування вішака (тасьма)',
        id: 'nastrochuvanniaVishakaTasma',
        price: 1.36,
        unload: false
    },
    {
        index: 81,
        name: 'Настрочування вішака (бірка)',
        id: 'nastrochuvanniaVishakaBirka',
        price: 1.2964,
        unload: false
    },
    {
        index: 82,
        name: 'Намітка петель по борті (1)',
        id: 'namitkaPetelPoBorti1',
        price: 0.12,
        unload: false
    },
    {
        index: 83,
        name: 'Намітка петель по борті (2)',
        id: 'namitkaPetelPoBorti2',
        price: 0.22,
        unload: false
    },
    {
        index: 84,
        name: 'Намітка петель по борті (3)',
        id: 'namitkaPetelPoBorti3',
        price: 0,
        unload: false
    },
    {
        index: 85,
        name: 'Намітка петель по борті (4)',
        id: 'namitkaPetelPoBorti4',
        price: 0,
        unload: false
    },
    {
        index: 86,
        name: 'Обметка петель по борті (1)',
        id: 'obmetkaPetelPoBorti1',
        price: 0,
        unload: false
    },
    {
        index: 87,
        name: 'Обметка петель по борті (2)',
        id: 'obmetkaPetelPoBorti2',
        price: 0.61,
        unload: false
    },
    {
        index: 88,
        name: 'Обметка петель по борті (3)',
        id: 'obmetkaPetelPoBorti3',
        price: 0.788,
        unload: false
    },
    {
        index: 89,
        name: 'Обметка петель по борті (3 клітка)',
        id: 'obmetkaPetelPoBorti3Klitka',
        price: 0.8515,
        unload: false
    },
    {
        index: 90,
        name: 'Обметка петель по борті (4)',
        id: 'obmetkaPetelPoBorti4',
        price: 1.0167,
        unload: false
    },
    {
        index: 91,
        name: 'Закріпки на петлях бортів (2)',
        id: 'zakripkyNaPetliakhBortiv2',
        price: 0,
        unload: false
    },
    {
        index: 92,
        name: 'Закріпки на петлях бортів (3)',
        id: 'zakripkyNaPetliakhBortiv3',
        price: 0.4194,
        unload: false
    },
    {
        index: 93,
        name: 'Контрастні петлі по лацкану (1)',
        id: 'kontrastniPetliPoLatskanu1',
        price: 0.4067,
        unload: false
    },
    {
        index: 94,
        name: 'Контрастні петлі по лацкану (2)',
        id: 'kontrastniPetliPoLatskanu2',
        price: 0.8515,
        unload: false
    },
    {
        index: 95,
        name: 'Заміна ниток на петлях',
        id: 'zaminaNytokNaPetliakh',
        price: 0.0463,
        unload: false
    },
    {
        index: 96,
        name: 'Прострочити оздоблюючу строчку по рукавах на 3.5 см',
        id: 'prostrochytyOzdobliuiuchuStrochkuPoRukavakhNa35Sm',
        price: 0.82,
        unload: false
    },
    {
        index: 97,
        name: 'Прострочити оздоблюючу строчку по шліцах низу на 3.5 см',
        id: 'prostrochytyOzdobliuiuchuStrochkuPoShlitsakhNyzuNa35Sm',
        price: 0.96,
        unload: false
    },
    {
        index: 98,
        name: 'Прострочити оздоблюючу строчку по борті коміру і лацкану на 0.1 см',
        id: 'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa01Sm',
        price: 3.3721,
        unload: false
    },
    {
        index: 99,
        name: 'Прострочити оздоблюючу строчку по борті коміру і лацкану на 0.1 см(гострий)',
        id: 'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa01SmHostryi',
        price: 3.8,
        unload: false
    },
    {
        index: 100,
        name: 'Прострочити оздоблюючу строчку по борті коміру і лацкану на 0.5 см',
        id: 'prostrochytyOzdobliuiuchuStrochkuPoBortiKomiruILatskanuNa05Sm',
        price: 3.74,
        unload: false
    },
    {
        index: 101,
        name: 'Прострочити оздоблюючу строчку по борті топ-топ коміру і лацкану',
        id: 'prostrochytyOzdobliuiuchuStrochkuPoBortiTopTopKomiruILatskanu',
        price: 3.53,
        unload: false
    },
    {
        index: 102,
        name: 'Прасування оздоблюючої строчки по бортах на 0.1 см',
        id: 'prasuvanniaOzdobliuiuchoiStrochkyPoBortakhNa01Sm',
        price: 0.9896,
        unload: false
    },
    {
        index: 103,
        name: 'Прасування оздоблюючої строчки по шліцах спинки на 0.5 см',
        id: 'prasuvanniaOzdobliuiuchoiStrochkyPoShlitsakhSpynkyNa05Sm',
        price: 0.37,
        unload: false
    },
    {
        index: 104,
        name: 'Прасування піджака по низу і шліцах',
        id: 'prasuvanniaPidzhakaPoNyzuIShlitsakh',
        price: 0.748,
        unload: false
    },
    {
        index: 105,
        name: 'Вішання піджака на вішак',
        id: 'vishanniaPidzhakaNaVishak',
        price: 0.11,
        unload: false
    },
    {
        index: 106,
        name: 'Опускання на ВТО',
        id: 'opuskanniaNaVto',
        price: 0.0977,
        unload: false
    },
    {
        index: 107,
        name: 'Пришивання металу до рукавів',
        id: 'pryshyvanniaMetaluDoRukaviv',
        price: 0,
        unload: false
    },
    {
        index: 108,
        name: 'Контроль піджака',
        id: 'kontrolPidzhaka',
        price: 0,
        unload: false
    },
    {
        index: 109,
        name: 'Переробки',
        id: 'pererobky',
        price: 0,
        unload: false
    },
    {
        index: 110,
        name: 'Пробні',
        id: 'probni',
        price: 0,
        unload: false
    }
]

export default operations