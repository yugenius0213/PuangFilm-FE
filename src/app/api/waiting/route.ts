import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const searchCode = searchParams.get('code') || '';

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/photo-request/status`,
    {
      headers: {
        Authorization: `Bearer ${searchCode}`,
      },
    },
  );
  const jsonData = await response.json();

  return NextResponse.json(jsonData, {
    status: jsonData.code,
  });
};
