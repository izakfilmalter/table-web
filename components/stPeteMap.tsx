'use client'

import type { FC } from 'react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

import { env } from '@/env.mjs'

const position = { lat: 27.79, lng: -82.7 }

export const StPeteMap: FC = () => (
  <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
    <Map
      defaultCenter={position}
      defaultZoom={11.5}
      clickableIcons={false}
      disableDefaultUI
      gestureHandling={'none'}
      styles={[
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            {
              saturation: '32',
            },
            {
              lightness: '-3',
            },
            {
              visibility: 'on',
            },
            {
              weight: '1.18',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'all',
          stylers: [
            {
              saturation: '-70',
            },
            {
              lightness: '14',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              saturation: '100',
            },
            {
              lightness: '-14',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off',
            },
            {
              lightness: '12',
            },
          ],
        },
      ]}
    />
  </APIProvider>
)
