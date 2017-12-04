const chai = require('chai');
const expect = chai.expect;

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const text = 'text';
        const from = 'me';
        const mes = generateMessage(from, text);
        expect(mes.from).to.equal(from);
        expect(mes.text).to.equal(text);
        expect(mes.createdAt).to.be.a('number');
    })
})
