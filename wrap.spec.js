const {expect} = require('chai')
const wrap = require('./wrap')


describe('returns a string', function(){
  it('returns an empty string', function(){
    expect(wrap('', )).to.equal('')
  })

  it('returns breaklines before col num', function(){
    expect(wrap('whatever you want', 8)).to.equal('whatever\nyou want')
  })

})
