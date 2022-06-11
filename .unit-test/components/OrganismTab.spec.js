import { shallowMount, config } from '@vue/test-utils'
import OrganismTab from '@/components/OrganismTab'
import { expect } from 'chai'
import i18n from '@/locales'

config.global.mocks = { $t: (text) => i18n.global.t(text) }
describe('Components > OrganismTab', () => {
  let wrapper
  beforeEach(
    () =>
      (wrapper = shallowMount(OrganismTab, {
        slots: {
          default: () => [
            { props: { title: 'first' } },
            { props: { title: 'second' } },
            { props: { title: 'third' } },
          ],
        },
        i18n,
      }))
  )

  describe('General', () => {
    it('checks whether component was mounted or not.', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('size', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.size).to.include({
          type: String,
          default: 'sm',
        })
      })
    })
  })

  describe('Computed', () => {
    describe('tabAttributes', () => {
      it('checks whether function returns correct content or not.', () => {
        expect(wrapper.vm.tabAttributes).to.deep.equal({
          class: { 'organism-tab': true, 'organism-tab--sm': true },
        })
      })

      it('checks whether function returns correct content or not when props were changed.', async () => {
        await wrapper.setProps({ size: 'md' })
        expect(wrapper.vm.tabAttributes).to.deep.equal({
          class: { 'organism-tab': true, 'organism-tab--md': true },
        })
      })
    })
  })

  describe('Html', () => {
    describe('<organism-tab>', () => {
      it('checks whether all slots parts have been rendered or not.', () => {
        expect(wrapper.findAll('.organism-tab').length).to.equal(3)
      })

      it('checks whether organism-tab--selected class exists or not.', () => {
        expect(wrapper.find('.organism-tab--selected').exists()).to.be.true
      })

      it('checks whether element fires "on-change" event or not when clicked.', async () => {
        await wrapper.find('.organism-tab').trigger('click')
        expect(wrapper.emitted('on-change')).to.be.ok
        expect(wrapper.find('.organism-tab--selected').exists()).to.be.true
      })
    })
  })
})
