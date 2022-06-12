import { shallowMount } from '@vue/test-utils'
import OrganismCard from '@/components/OrganismCard'
import { expect } from 'chai'

describe('OrganismCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(OrganismCard)
  })

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('color', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.color).to.include({
          type: String,
          default: 'dark-jungle-green',
        })
      })
    })

    describe('shaped', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.shaped).to.include({ type: Boolean, default: false })
      })
    })

    describe('elevated', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.elevated).to.include({ type: Boolean, default: false })
      })
    })

    describe('hover', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.hover).to.include({ type: Boolean, default: false })
      })
    })
  })

  describe('Computed', () => {
    describe('cardAttributes', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.cardAttributes).to.deep.equal({
          class: 'organism-card b-dark-jungle-green',
        })
      })

      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({
          color: 'mirage',
          shaped: true,
          elevated: true,
          hover: true,
        })
        expect(wrapper.vm.cardAttributes).to.deep.equal({
          class:
            'organism-card b-mirage organism-card--elevated organism-card--hover organism-card--shaped',
        })
      })
    })
  })
})
