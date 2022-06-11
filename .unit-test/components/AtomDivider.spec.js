import { shallowMount } from '@vue/test-utils'
import AtomDivider from '@/components/AtomDivider'
import { expect } from 'chai'

describe('AtomDivider', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(AtomDivider)
  })

  describe('General', () => {
    it('checks whether componenet was mounted or not', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('color', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.color).to.include({ type: String, default: 'gunmetal' })
      })
    })
    
    describe('size', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.size).to.include({ type: String, default: 'sm' })
      })
    })
  })

  describe('Computed', () => {
    describe('dividerAttributes', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.dividerAttributes).to.deep.equal({
          class: 'atom-divider t-gunmetal atom-divider__sm',
        })
      })

      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          color: 'mirage',
          size: 'lg',
        })

        expect(wrapper.vm.dividerAttributes).to.deep.equal({
          class: 'atom-divider t-mirage atom-divider__lg',
        })
      })
    })
  })
})
