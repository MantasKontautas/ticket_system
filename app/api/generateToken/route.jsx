import { NextResponse } from 'next/server';
const jwt = require('jsonwebtoken');


export async function POST(req) {
    const {event} = await req.json();
    const token = jwt.sign(event, process.env.JWT_SECRET);
    return NextResponse.json({token})
}