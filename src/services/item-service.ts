import items from '../items.json'

type JSONItem = typeof items[0]

enum Ziel {
  Spass = 'Spass',
  Socialising = 'Socialising',
  Training = 'Training',
}

enum Training {
  Kraft = 'Kraft',
  Ausdauer = 'Ausdauer',
  Geschick = 'Geschick',
  Schnelligkeit = 'Schnelligkeit',
}

enum Teilnehmer {
  alleine = 'alleine',
  zwei = 'zwei',
  Team = 'Team',
}

enum Ort {
  indoor = 'indoor',
  outdoor = 'outdoor',
}

export interface ChallangeItem {
  Challange: string
  Beschreibung: {
    text: string
    link: string
  }
  Level: number
  Ziel: Ziel[]
  Training: Training[]
  Teilnehmer: Teilnehmer[]
  Ort: Ort[]
  Altersgruppe: number
  Tags: string[]
}

const isChecked = (input: string): boolean => {
  return input === 'x'
}

const createOrtField = (item: JSONItem): Ort[] => {
  const { inddoor, outdoor } = item

  const ort = [] as Ort[]

  if (isChecked(inddoor)) {
    ort.push(Ort.indoor)
  }

  if (isChecked(outdoor)) {
    ort.push(Ort.outdoor)
  }

  return ort
}

const createZielField = (item: JSONItem) => {
  return Object.entries(item)
    .filter(entry => entry[0].startsWith('Ziel_'))
    .filter(entry => isChecked(entry[1] as string))
    .map(entry => entry[0].split('_')[1]) as Ziel[]
}

const createTrainingField = (item: JSONItem) => {
  return Object.entries(item)
    .filter(entry => entry[0].startsWith('Effekt_'))
    .filter(entry => isChecked(entry[1] as string))
    .map(entry => entry[0].split('_')[1]) as Training[]
}

const createTeilnehmerField = (item: JSONItem): Teilnehmer[] => {
  const { Anzahl_alleine, Anzahl_zwei, Anzahl_team } = item

  const teilnehmer = [] as Teilnehmer[]
  if (isChecked(Anzahl_alleine)) {
    teilnehmer.push(Teilnehmer.alleine)
  }
  if (isChecked(Anzahl_zwei)) {
    teilnehmer.push(Teilnehmer.zwei)
  }
  if (isChecked(Anzahl_team)) {
    teilnehmer.push(Teilnehmer.Team)
  }

  return teilnehmer
}


const convert = (item: JSONItem): ChallangeItem => {
  const {
    Challenge,
    Beschreibung,
    Mindestalter,
    Anleitungslink,
    Tags
  } = item

  const Ort = createOrtField(item)
  const Teilnehmer = createTeilnehmerField(item)
  const Ziel = createZielField(item)
  const Training = createTrainingField(item)

  return {
    Challange: Challenge,
    Beschreibung: {
      text: Beschreibung,
      link: Anleitungslink
    },
    Altersgruppe: Mindestalter,
    Level: 1,
    Tags: Tags.split(',').map(item => item.trim()),
    Ort,
    Teilnehmer,
    Ziel,
    Training
  }
}

const getAll = () => {
  return items.map(convert)
}

const getByIndex = (index: number) => {
  const item = items[index]

  let convertedItem: ChallangeItem | null = null
  if (!item) {
    convertedItem = convert(item)
  }

  return convertedItem
}

const getByIndeces = (indeces: number[]): ChallangeItem[] => {
  return indeces.map(getByIndex).filter(item => !!item) as ChallangeItem[]
}

export const ItemService = {
  getAll,
  getByIndex,
  getByIndeces
}