import { shallowMount } from '@vue/test-utils'
import AtomIcon from '@/components/AtomIcon'
import { expect } from 'chai'

describe('AtomImage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(AtomIcon, {
      props: { icon: 'only-sell' },
    })
  })

  describe('General', () => {
    it('checks whether componenet was mounted or not.', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('icon', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.icon).to.include({ type: String })
      })
    })

    describe('color', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.color).to.include({ type: String, default: null })
      })
    })

    describe('alt', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.alt).to.include({ type: String, default: '' })
      })
    })

    describe('width', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.width).to.deep.include({
          type: [Number, String],
          default: 24,
        })
      })
    })

    describe('height', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.height).to.deep.include({
          type: [Number, String],
          default: 24,
        })
      })
    })
  })

  describe('Computed', () => {
    describe('iconAttributes', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.iconAttributes).to.deep.equal({
          src: require('@/assets/icons/only-sell.svg'),
          width: 24,
          height: 24,
          alt: '',
        })
      })

      it('checks whether function returns correct content or not when props were changed.', async () => {
        const customProps = await wrapper.setProps({
          icon: 'only-buy',
          alt: 'orderbook-order',
          width: 32,
          height: 32,
        })

        expect(wrapper.vm.iconAttributes).to.deep.equal({
          src: require('@/assets/icons/only-buy.svg'),
          alt: 'orderbook-order',
          width: 32,
          height: 32,
        })
      })
    })
  })

  describe('Html', () => {
    describe('<img>', () => {
      it('checks whether element fires "on-click" event or not when clicked.', async () => {
        await wrapper.find('img').trigger('click')
        expect(wrapper.emitted('on-click')).to.be.ok
      })
    })
  })
})
