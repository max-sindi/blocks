import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }


  render() {
    const {components: {Text, Button, ContactForm, Icon}, style} = this.props

    return (
      <section className={style.section}>
        <h1 className={style.visuallyHidden}>UI Kit</h1>
        <div className={style.section__inner}>
          <section className={style.column}>
            <h1 className={style.visuallyHidden}>Light</h1>
            <p className={classNames(style.heroTitle, style.item)}>
              <Text bind="heroTitle" />
            </p>
            <p className={classNames(style.blockTitle, style.item)}>
              <Text bind="blockTitle" />
            </p>
            <p className={classNames(style.subTitle, style.item)}>
              <Text bind="subTitle" />
            </p>
            <p className={classNames(style.headingLg, style.item)}>
              <Text bind="headingLg" />
            </p>
            <p className={classNames(style.heading, style.item)}>
              <Text bind="heading" />
            </p>
            <p className={classNames(style.subHeading, style.item)}>
              <Text bind="subHeading" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="text" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="linkText" />
            </p>
            <p className={classNames(style.smallText, style.item)}>
              <Text bind="smallText" />
            </p>
            <p className={classNames(style.quote, style.item)}>
              <Text bind="quote" />
            </p>
            <p className={classNames(style.caption, style.item)}>
              <Text bind="caption" />
            </p>
            <Button className={style.item} bind="primary" />
            <br/>
            <Button className={style.item} bind="primaryAlt" />
            <br/>
            <Button className={style.item} bind="secondary" />
            <br/>
            <Button className={style.item} bind="secondaryAlt" />
            <br/>
            <Button className={style.item} bind="link" />
            <br/>
            <Button className={style.item} bind="primarySm" />
            <br/>
            <Button className={style.item} bind="primaryMd" />
            <br/>
            <Button className={style.item} bind="primaryLg" />
            <ContactForm
              bind="contactForm"
              className={style.form}
              labelClassName={style.form__item}
              fieldClassName={style.form__field}
              button={{
                type: 'primary',
                className: style.form__button,
              }}
            />
            <Icon bind="icon"/>
          </section>
          <section className={classNames(style.column, style.dark, 'ui-kit-dark')}>
            <h1 className={style.visuallyHidden}>Dark</h1>
            <p className={classNames(style.heroTitle, style.item)}>
              <Text bind="heroTitle" />
            </p>
            <p className={classNames(style.blockTitle, style.item)}>
              <Text bind="blockTitle" />
            </p>
            <p className={classNames(style.subTitle, style.item)}>
              <Text bind="subTitle" />
            </p>
            <p className={classNames(style.headingLg, style.item)}>
              <Text bind="headingLg" />
            </p>
            <p className={classNames(style.heading, style.item)}>
              <Text bind="heading" />
            </p>
            <p className={classNames(style.subHeading, style.item)}>
              <Text bind="subHeading" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="text" />
            </p>
            <p className={classNames(style.text, style.item)}>
              <Text bind="linkText" />
            </p>
            <p className={classNames(style.smallText, style.item)}>
              <Text bind="smallText" />
            </p>
            <p className={classNames(style.quote, style.item)}>
              <Text bind="quote" />
            </p>
            <p className={classNames(style.caption, style.item)}>
              <Text bind="caption" />
            </p>
            <Button className={style.item} bind="primary" />
            <br/>
            <Button className={style.item} bind="primaryAlt" />
            <br/>
            <Button className={style.item} bind="secondary" />
            <br/>
            <Button className={style.item} bind="secondaryAlt" />
            <br/>
            <Button className={style.item} bind="link" />
            <br/>
            <Button className={style.item} bind="primarySm" />
            <br/>
            <Button className={style.item} bind="primaryMd" />
            <br/>
            <Button className={style.item} bind="primaryLg" />
            <ContactForm
              bind="contactForm"
              className={style.form}
              labelClassName={style.form__item}
              fieldClassName={style.form__field}
              button={{
                type: 'secondary',
                className: style.form__button,
              }}
            />
            <Icon bind="icon"/>
          </section>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'ContactForm', 'Icon'])($editor.components)

Block.defaultContent = {
  heroTitle: 'HEROTITLE',
  blockTitle: 'BLOCKTITLE',
  subTitle: 'SUBTITLE',
  headingLg: 'HEADING LARGE',
  heading: 'HEADING',
  subHeading: 'SUB HEADING',
  text: 'TEXT',
  linkText: 'Lorem ipsum <a href="https://google.com">dolor sit amet,</a> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  smallText: 'SMALL TEXT',
  quote: 'QUOTE',
  caption: 'CAPTION',
  primary: {
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
    textValue: 'Primary',
    type: 'primary',
  },
  primaryAlt: {
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
    textValue: 'Primary Alternative',
    type: 'primary-alt',
  },
  secondary: {
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
    textValue: 'Secondary',
    type: 'secondary',
  },
  secondaryAlt: {
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
    textValue: 'Secondary Alternative',
    type: 'secondary-alt',
  },
  link: {
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
    textValue: 'Button link',
    type: 'link'
  },
  primarySm: {
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
    textValue: 'Primary',
    type: 'primary',
    size: 'sm',
  },
  primaryMd: {
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
    textValue: 'Primary',
    type: 'primary',
    size: 'md',
  },
  primaryLg: {
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
    textValue: 'Primary',
    type: 'primary',
    size: 'lg',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: 'Name',
        placeholder: '',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: '',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: '',
        required: true,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
    },
    className: 'form',
  },
  icon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'light-shade-color?darken=20'
  }
}

Block.modifierScheme = [
  {
    id: 'text',
    type: 'checkbox',
    label: 'Company main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'About us link',
    defaultValue: false,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Contact us button',
    defaultValue: true,
  },
  {
    id: 'socialIcons',
    type: 'checkbox',
    label: 'Social media buttons',
    defaultValue: false,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
]

export default Block
