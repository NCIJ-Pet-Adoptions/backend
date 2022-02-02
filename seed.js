const {sequelize} = require('./db')
const {Dog} = require('./models/dog')

const seedDog = [
    {
        name : 'Lassie',
        image : 'someimage.jpg',
        purpose : 'Service Dog',
        breed : 'German Shepherd',
        color : 'Multicolor',
        size : 'Medium',
        hypoallergenic : 'No'
    },
    {
        name : 'Buddy',
        image : 'someimage.jpg',
        purpose : 'Service Dog',
        breed : 'Labrador',
        color : 'Brown',
        size : 'Medium',
        hypoallergenic : 'No'
      },
    {
        name : 'Major',
        image : 'someimage.jpg',
        purpose : 'Guard Dog',
        breed : 'Chihuahua',
        color : 'Brown',
        size : 'Medium',
        hypoallergenic : 'No'
    },
    {
        name : 'Susie',
        image : 'someimage.jpg',
        purpose : 'Home Pet',
        breed : 'Poodle',
        color : 'White',
        size : 'Toy',
        hypoallergenic : 'Yes'
      },
      {
        name : 'Curlie',
        image : 'someimage.jpg',
        purpose : 'Home Pet',
        breed : 'Portuguese Water Dog',
        color : 'Black',
        size : 'Large',
        hypoallergenic : 'Yes'
      },
  
]
  
  const seed = async () => {
    try {
      await sequelize.sync({force: true})
      await Dog.bulkCreate(seedDog, {validate: true})
      console.log('Seeding success!')
      sequelize.close()
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }
  }

  seed()
      .then(() => {
        console.log('Seeding success!')
      })
      .catch(err => {
        console.error('Oh no!! Something went wrong!')
        console.error(err)
      })