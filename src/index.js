import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  logo: {
    text: {
      value: 'forks',
    },
  },
  theme: 'dark',
  background: {
    type: 'color',
    color: '#1f1e1d',
  },
  copyright: 'Produced by Weblium.com.',
  additional: 'All rights Reserved',
  menu: [
    {
      id: '10c06b19-6e0d-4ad1-b1d5-213501dd321c',
      metadata: {
        displayName: 'About us',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: '29f03a3e-117d-490e-963c-ace78d85258f',
      metadata: {
        displayName: 'Services',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: '8914ae89-ca69-4b81-8d70-68fefdb22f49',
      metadata: {
        displayName: 'Projects',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: '2bf3b2aa-061b-42af-afd2-48301733a536',
      metadata: {
        displayName: 'Testimonials',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'a24bbd34-4a84-451d-82bf-929f35264e2d',
      metadata: {
        displayName: 'Contact us',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Company name',
    defaultValue: true,
  },
  {
    id: 'text-left',
    type: 'checkbox',
    label: 'Left text',
    defaultValue: true,
  },
  {
    id: 'text-right',
    type: 'checkbox',
    label: 'Right text',
    defaultValue: true,
  },
]

export default ExtendedWireframe
