import { ItemService, ChallangeItem } from './item-service';

export interface TagOption {
  field: string
  value: any
  label: string
}

type TagCreator = (item: ChallangeItem) => TagOption[]


export const createLevelTag = (value) => ({
  field: 'Level',
  value: value,
  label: `Level ${value}`
})

const createLevelTags: TagCreator = (item) => {
  return [createLevelTag(item.Level)]
}

export const createZielTag = (value) => ({
  field: 'Ziel',
  value: value,
  label: value
})

const createZielTags: TagCreator = (item) => {
  return item.Ziel.map(createZielTag)
}

export const createTrainingTag = (value) => ({
  field: 'Training',
  value: value,
  label: value
})

const createTrainingTags: TagCreator = (item) => {
  return item.Training.map(createTrainingTag)
}

export const createTeilnehmerTag = (value) => ({
  field: 'Teilnehmer',
  value: value,
  label: value
})

const createTeilnehmerTags: TagCreator = (item) => {
  return item.Teilnehmer.map(createTeilnehmerTag)
}

export const createOrtTag = (value) => ({
  field: 'Ort',
  value: value,
  label: value
})

const createOrtTags: TagCreator = (item) => {
  return item.Ort.map(createOrtTag)
}

export const createAltergruppeTag = (value) => ({
  field: 'Altergruppe',
  value: value,
  label: `ab ${value} Jahren`
})

const createAltersgruppeTags: TagCreator = (item) => {
  return [createAltergruppeTag(item.Altersgruppe)]
}

const createTagsTags: TagCreator = (item) => {
  return item.Tags.map(el => ({
    field: 'Tags',
    value: el,
    label: el
  }))
}

const createAutocompleteOptions = (): TagOption[] => {
  const allItems = ItemService.getAll()

  const creators = [
    createLevelTags,
    createZielTags,
    createTrainingTags,
    createTeilnehmerTags,
    createOrtTags,
    createAltersgruppeTags,
    createTagsTags
  ]

  /* HashTable with labels as keys */
  const optionsMap = {}  
  for (const item of allItems) {
    for (const creator of creators) {
      const tags = creator(item)

      for (const tag of tags) {
        optionsMap[tag.label] = tag
      }
    }
  }

  return Object.values(optionsMap)
}

export const AutocompleteService = {
  createAutocompleteOptions
}
