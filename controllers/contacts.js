const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db().collection('school-bd').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingle = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('school-bd')
      .findOne({ _id: userId });

    if (result) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'This contact is not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createContact = async (req, res) => {
  try {
    // Validate required fields
    const { first_name, last_name, date_of_birth, password } = req.body;
    if (!first_name || !last_name || !date_of_birth || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const contact = {
      first_name,
      last_name,
      date_of_birth,
      password,
      nationality: req.body.nationality || '',
      account_type: 'student',
      semester: req.body.semester || '',
      parents: {
        mother: req.body.parents?.mother || '',
        father: req.body.parents?.father || ''
      },
      contact_numbers: {
        phone_num: req.body.contact_numbers?.phone_num || '',
        parents: {
          mother: req.body.contact_numbers?.parents?.mother || '',
          father: req.body.contact_numbers?.parents?.father || ''
        }
      },
      public_profile: {
        hobbies: req.body.public_profile?.hobbies || [],
        plans_after_graduation: req.body.public_profile?.plans_after_graduation || '',
        major: req.body.public_profile?.major || '',
        years_to_graduate: req.body.public_profile?.years_to_graduate || 0
      }
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('school-bd')
      .replaceOne({ _id: userId }, contact);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const adminUpdateContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const contact = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      password: req.body.password,
      account_type: req.body.account_type || 'admin',
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('school-bd')
      .replaceOne({ _id: userId }, contact);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('school-bd')
      .deleteOne({ _id: userId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllContacts,
  getSingle,
  createContact,
  updateContact,
  adminUpdateContact,
  deleteContact
};
