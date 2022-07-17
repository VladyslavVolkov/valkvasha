import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocale } from '../app/I18n'
import logoRu from './logo-ru.jpg'
import logoUa from './logo-ua.jpg'

const Logo: FC = () => {
  const { locale } = useLocale()
  const [img, setImg] = useState(locale === 'ru' ? logoRu : logoUa)
  useEffect(() => {
    setImg(locale === 'ru' ? logoRu : logoUa)
  }, [locale])
  const navigate = useNavigate()
  return <img style={{ display: 'block', cursor: 'pointer' }} onClick={() => navigate('/')} width={300} height={120} src={img} alt={''} />
}

export { Logo }
