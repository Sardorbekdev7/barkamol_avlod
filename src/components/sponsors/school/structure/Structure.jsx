import Link from 'next/link'
import style from './style/structure.module.css'
import img from '../../../../public/structure/img.svg'
import Image from 'next/image'

const Structure = () => {
  return (
    <div className={style.structure}>
      <div className={style.structurelink}>
        <p>Maktab {'>'} </p>
        <Link href={'/maktab/maktab-tuzilmasi/'}>Maktab-tuzilmasi</Link>
      </div>
      <div className={style.structuretext}>
        <h1>Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi</h1>
        <Image src={img} alt='' />
      </div>
      <div className='back'>
          <Link href={'/'}>Ortga</Link>
      </div>
    </div>
  )
}

export default Structure