import client from './client'

export default {

  getPeople (callback) {
    client.get('/api/data/persons', callback)
  },

  newPerson (person, callback) {
    const data = {
      first_name: person.first_name,
      last_name: person.last_name,
      email: person.email,
      phone: person.phone
    }
    client.post(`/api/data/persons/new`, data, callback)
  },

  updatePerson (person, callback) {
    const data = {
      first_name: person.first_name,
      last_name: person.last_name,
      email: person.email,
      phone: person.phone,
      timezone: person.timezone,
      locale: person.locale
    }
    client.put(`/api/data/persons/${person.id}`, data, callback)
  },

  deletePerson (personId, callback) {
    client.del(`/api/data/persons/${personId}`, callback)
  },

  postCsv (formData, callback) {
    client.post('/api/import/csv/persons', formData, callback)
  },

  changePassword (form, callback) {
    const data = {
      old_password: form.oldPassword,
      password: form.password,
      password2: form.password2
    }
    client.post('/api/auth/change-password', data, callback)
  }

}