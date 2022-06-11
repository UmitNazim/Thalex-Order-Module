import { shallowMount, config } from '@vue/test-utils'
import AtomButton from '@/components/AtomButton'
import { expect } from 'chai'

describe('AtomButton', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(AtomButton)
  })

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('type', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.type).to.include({ type: String, default: 'button' })
      })
    })

    describe('size', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.size).to.include({ type: String, default: 'sm' })
      })
    })

    describe('theme', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.theme).to.include({
          type: String,
          default: 'success',
        })
      })
    })

    describe('block', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.block).to.include({ type: Boolean, default: false })
      })
    })

    describe('disabled', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.disabled).to.include({ type: Boolean, default: false })
      })
    })
  })

  describe('Computed', () => {
    describe('buttonAttributes', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.buttonAttributes).to.deep.equal({
          class: {
            'atom-button--success': true,
            'atom-button--sm': true,
            'atom-button--block': false,
          },
          disabled: false,
          type: 'button',
        })
      })

      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          type: 'submit',
          theme: 'danger',
          size: 'lg',
          block: true,
          disabled: true,
          flat: true,
        })
        
        expect(wrapper.vm.buttonAttributes).to.deep.equal({
          class: {
            'atom-button--danger': true,
            'atom-button--lg': true,
            'atom-button--block': true,
          },
          disabled: true,
          type: 'submit',
        })
      })
    })
  })

  describe('Html', () => {
    describe('<button>', () => {
      it('checks whether element fires "on-click" event or not when clicked.', async () => {
        await wrapper.find('.atom-button').trigger('click')
        expect(wrapper.emitted('on-click')).to.be.ok
      })
    })
  })
})
