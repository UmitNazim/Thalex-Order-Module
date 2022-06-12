import { shallowMount } from '@vue/test-utils'
import OrganismTabPanel from '@/components/OrganismTabPanel'
import { expect } from 'chai'

describe('Components > OrganismTabPanel', () => {
  let wrapper
  beforeEach(() => (wrapper = shallowMount(OrganismTabPanel, { props: { title: 'waste-name' } })))

  describe('General', () => {
    it('checks whether component was mounted or not.', () => {
      expect(wrapper.exists()).to.be.true
    })
  })

  describe('Props', () => {
    describe('title', () => {
      it('checks prop acceptable value type.', () => {
        expect(wrapper.vm.$options.props.title).to.include({
          type: String,
          required: true,
        })
      })
    })
  })
})
