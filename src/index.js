import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  services: [
    {
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: 'Service 1',
      description:
        'Multipurpose assistance for online stores and offline retail businesses.',
      picture: {
        resourceRef: 'img.jpg',
        alt: 'Service illustration photo',
      },
      cta: {
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: 'Service 2',
      description:
        'Developing marketing and business strategy to help company grow fast.',
      picture: {
        resourceRef: 'img.jpg',
        alt: 'Service illustration photo',
      },
      cta: {
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: 'Service 3',
      description:
        'Building brand awareness for micro and small businesses. ',
      picture: {
        resourceRef: 'img.jpg',
        alt: 'Service illustration photo',
      },
      cta: {
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Service 4',
      description:
        'Aftersales support in marketing, sales, and staff training.',
      picture: {
        resourceRef: 'img.jpg',
        alt: 'Service illustration photo',
      },
      cta: {
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
        textValue: 'Learn more',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M17.8181818,0 C16.6149091,0 15.6363636,0.978545455 15.6363636,2.18181818 C15.6363636,2.55818182 15.732,2.91236364 15.9003636,3.22181818 L12.3261818,6.796 C11.8334545,6.41236364 11.2167273,6.18181818 10.5454545,6.18181818 C9.87418182,6.18181818 9.25745455,6.41236364 8.76436364,6.79563636 L5.97563636,4.00690909 C6.10363636,3.79054545 6.18181818,3.54181818 6.18181818,3.27272727 C6.18181818,2.47054545 5.52945455,1.81818182 4.72727273,1.81818182 C3.92509091,1.81818182 3.27272727,2.47054545 3.27272727,3.27272727 C3.27272727,4.07490909 3.92509091,4.72727273 4.72727273,4.72727273 C4.99636364,4.72727273 5.24509091,4.64909091 5.46145455,4.52109091 L8.25018182,7.30981818 C7.86690909,7.80290909 7.63636364,8.41963636 7.63636364,9.09090909 C7.63636364,9.76218182 7.86690909,10.3789091 8.25018182,10.8716364 L3.64509091,15.4770909 C3.25745455,15.1254545 2.74509091,14.9090909 2.18181818,14.9090909 C0.978545455,14.9090909 0,15.8876364 0,17.0909091 C0,18.2941818 0.978545455,19.2727273 2.18181818,19.2727273 C3.38509091,19.2727273 4.36363636,18.2941818 4.36363636,17.0909091 C4.36363636,16.7145455 4.268,16.3603636 4.09963636,16.0509091 L8.76472727,11.3858182 C9.16690909,11.6985455 9.652,11.908 10.1821818,11.9745455 L10.1821818,15.6690909 C9.152,15.8429091 8.364,16.7389091 8.364,17.8181818 C8.364,19.0214545 9.34254545,20 10.5458182,20 C11.7490909,20 12.7276364,19.0214545 12.7276364,17.8181818 C12.7276364,16.7392727 11.9396364,15.8432727 10.9094545,15.6690909 L10.9094545,11.9745455 C11.4396364,11.908 11.9247273,11.6985455 12.3269091,11.3858182 L15.1156364,14.1745455 C14.9872727,14.3912727 14.9090909,14.64 14.9090909,14.9090909 C14.9090909,15.7112727 15.5614545,16.3636364 16.3636364,16.3636364 C17.1658182,16.3636364 17.8181818,15.7112727 17.8181818,14.9090909 C17.8181818,14.1069091 17.1658182,13.4545455 16.3636364,13.4545455 C16.0945455,13.4545455 15.8458182,13.5327273 15.6294545,13.6607273 L12.8407273,10.872 C13.224,10.3789091 13.4545455,9.76218182 13.4545455,9.09090909 C13.4545455,8.41963636 13.224,7.80290909 12.8407273,7.31018182 L16.3552727,3.79563636 C16.7425455,4.14727273 17.2549091,4.36363636 17.8181818,4.36363636 C19.0214545,4.36363636 20,3.38509091 20,2.18181818 C20,0.978545455 19.0214545,0 17.8181818,0 Z" id="Shape" /></svg>',
    fill: 'var(--ui-brand-color)',
  },
  title: 'Services We Provide.',
  description:
    'We deliver all kind of services that support small and micro businesses. Here are some of them:',
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
    textValue: 'Book a service',
  },
  'button-2': {
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
    textValue: 'All services',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Services description',
    defaultValue: true,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Service title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Service main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'Link',
    defaultValue: true,
  },
  {
    id: 'button-primary',
    type: 'hidden',
    label: 'Primary button',
    defaultValue: false,
  },
  {
    id: 'button-secondary',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
  {
    id: 'top-icon',
    type: 'checkbox',
    label: 'Top icon decorator',
    defaultValue: true,
  },
]

export default ExtendedWireframe
