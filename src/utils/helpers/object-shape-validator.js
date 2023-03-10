const { ValidationError } = require('yup')
const { InvalidParamError, MissingParamServerError } = require('../errors')

module.exports = class ObjectShapeValidator {
  constructor({ yupSchema } = {}) {
    this.yupSchema = yupSchema
  }

  async isValid(httpRequest) {
    try {
      if (!httpRequest) {
        throw new MissingParamServerError('httpRequest')
      }
      await this.yupSchema.validateSync(httpRequest)
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new InvalidParamError(error.errors)
      }
      throw error
    }
  }
}
