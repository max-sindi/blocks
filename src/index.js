import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        resourceRef: 'depositphotos_146804477_original.jpg',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        resourceRef: 'Depositphotos_150504326_original.jpg',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        resourceRef: 'Depositphotos_159638720_original.jpg',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[3],
      picture: {
        resourceRef: 'Depositphotos_169507418_original.jpg',
        alt: 'Service illustration photo',
      },
    },
  ],
  'button-1': {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    type: 'secondary',
    textValue: 'Learn more',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
