interface IPortfolio {
  posisi: string,
  skils: string,
  perusahaan: string,
  tanggalMulai: string,
  tanggalSelesai: string,
  deskripsiPortfolio: string 
}[]
  
interface IProfile {
  name: string,
  title: string,
  deskripsi: string
}

interface IFileImage {
  type: string,
  pathImg: string,
  base64Image: any
}