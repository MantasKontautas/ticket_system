import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');


export async function POST(req) {
    const {token} = await req.json();
    console.log(token)
    const event = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({event})
}