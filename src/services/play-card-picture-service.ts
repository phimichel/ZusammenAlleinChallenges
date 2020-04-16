import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

const createPicture = async (): Promise<Blob> => {
  const playcard = document.querySelector('#play-card') as HTMLElement
  const rect = playcard.getBoundingClientRect()

  const canvas = await html2canvas(playcard, { scrollY: rect.y })

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject('Blob creation failed')
      }

      resolve(blob!)
    });
  })
}
const downloadPicture = async () => {
  const blob = await createPicture()

  saveAs(blob, 'playcard.png')
}

export const PlayCardPictureService = {
  downloadPicture
}