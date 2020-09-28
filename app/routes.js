const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/auth', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const username = req.session.data['user-username']

  if (username === 'mca') {
    res.redirect('dashboard-mca')
  } else {
    res.redirect('dashboard-tp')
  }
})

module.exports = router
