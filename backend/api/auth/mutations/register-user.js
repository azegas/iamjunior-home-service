const { UserModel } = require('../model');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Username already exists
 */

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Required fields: username, email, and password.'
        });
    }

    // Check if fields are of the correct type
    if (
        typeof username !== 'string' || 
        typeof email !== 'string' || 
        typeof password !== 'string'
    ) {
        return res.status(400).json({
            success: false,
            message: 'username, email, and password should be strings.'
        });
    }

    // Check if email is in a valid format
    if (!email.includes('@')) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format.'
        });
    }

    // Check if username already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: 'Username already exists.'
        });
    }

    try {
        const newUser = await UserModel.create({ username, email, password });
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: newUser
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = { registerUser };