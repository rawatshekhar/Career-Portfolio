import { NextResponse } from 'next/server';

// This is a Server-Side API Route
// Runs only on the server, never exposed to client

export async function GET() {
  try {
    // Fetch from external API with all required headers and cookies
    const response = await fetch('https://secure.yatra.com/trip/getTripRequest?page_no=1&limit=100', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en-GB,en;q=0.9',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Cookie': 'JSESSIONID=3465D16D93CA1E0F200058D7BB75BF37; __utmc=39525803; accessToken=19d8bb80-baab-4eeb-9705-e12c084d97ec; ssoToken=05367451-4707-4b79-915a-38e00bac9946; userType=CORPORATE; userName=Anita; SessionVX=b79eb6e0-8a0e-41d4-baa3-713081d14eae; currencyId=1; lang=en; _ga=GA1.2.709881492.1768799856; _gid=GA1.2.1576917949.1768799875; newhomepage=true; __utma=39525803.709881492.1768799856.1768799856.1768802190.2; __utmz=39525803.1768802190.2.2.utmcsr=secure.yatra.com|utmccn=(referral)|utmcmd=referral|utmcct=/; XSRF-TOKEN=0c2e3add-02ed-4e67-b782-43191569bd79; _ga_SKRTMMH8DD=GS2.2.s1768802190$o2$g1$t1768802357$j60$l0$h0; _gat=1',
        'Pragma': 'no-cache',
        'Referer': 'https://secure.yatra.com/trip/tripRequestPage',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from external API: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Fallback data if external API fails
    return NextResponse.json({
      error: 'Failed to fetch from external API',
      message: error instanceof Error ? error.message : 'Unknown error',
      fallback: true,
    }, { status: 500 });
  }
}

// You can also handle POST, PUT, DELETE, etc.
export async function POST(request: Request) {
  const body = await request.json();
  
  // Process the data server-side
  const result = {
    success: true,
    received: body,
    processedAt: new Date().toISOString(),
  };

  return NextResponse.json(result);
}

