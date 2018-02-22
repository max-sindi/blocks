import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  cta: {
    ...Component.defaultContent.cta,
    size: 'lg',
  },
  awards: [
    {
      ...Component.defaultContent.awards[0],
      picture: {
        src: '1.png',
        alt: 'Award illustration photo',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      picture: {
        src: '2.png',
        alt: 'Award illustration photo',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      picture: {
        src: '3.png',
        alt: 'Award illustration photo',
      },
    },
    {
      ...Component.defaultContent.awards[3],
      picture: {
        src: '4.png',
        alt: 'Award illustration photo',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
