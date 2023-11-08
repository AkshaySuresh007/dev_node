const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { config } = require('dotenv');


module.exports = {
    express,
    cors,
    jwt,
    config
}