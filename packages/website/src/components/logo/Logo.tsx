import {FC, useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import {useApp} from "src/components/app";

import logoRu from './logo-ru.jpg'
import logoUa from './logo-ua.jpg'

const Logo:  FC = () => {
  const {i18n: {locale}} = useApp()
  const [img, setImg] = useState(locale === 'ru' ? logoRu : logoUa)
  useEffect(()=> {setImg(locale === 'ru' ? logoRu : logoUa)}, [locale])
  return (
    <Link to={'/'}>
      <img width={300} height={120} src={img} alt={''}/>
    </Link>
  );
}

export { Logo }
