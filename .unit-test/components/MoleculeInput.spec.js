import { shallowMount, config } from '@vue/test-utils'
import MoleculeInput from '@/components/MoleculeInput'
import { expect } from 'chai'

describe('Components > MoleculeInput', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(MoleculeInput)
  })

  describe('General', () => {
    it('checks whether component was mounted or not.', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('modelValue', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.modelValue).to.deep.include({
          type: [String, Number],
          default: null,
        })
      })
    })

    describe('placeholder', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.placeholder).to.include({
          type: String,
          default: null,
        })
      })
    })

    describe('disabled', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.disabled).to.include({
          type: Boolean,
          default: false,
        })
      })
    })

    describe('readonly', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.readonly).to.include({
          type: Boolean,
          default: false,
        })
      })
    })

    describe('type', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.type).to.include({
          type: String,
          default: 'text',
        })
      })
    })

    describe('prepend', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.prepend).to.include({
          type: String,
          default: null,
        })
      })
    })

    describe('append', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.append).to.include({
          type: String,
          default: null,
        })
      })
    })
  })

  describe('Html', () => {
    describe('<div>', () => {
      it('checks whether element has disabled class or not.', async () => {
        await wrapper.setProps({ disabled: true })
        expect(wrapper.find('.molecule-input--disabled').exists()).to.be.true
      })
    })

    describe('<input>>', () => {
      it('checks whether element fires "on-input" event or not when clicked.', async () => {
        const input = wrapper.find('.molecule-input__field')
        input.element.value = 'TEST'
        input.trigger('input')
        expect(wrapper.emitted('on-input')).to.be.ok
      })
    })
  })
})
