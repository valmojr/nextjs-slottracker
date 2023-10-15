'use client'

import Button from '@/app/Util/Components/Buttons/Button';
import Frame from '@/app/Util/Components/Divs/Frame';
import { Guild } from '@/app/Util/types/entity';
import { ProfileContext, ProfileContextProps } from '@/app/context/Context';
import { Suspense, useContext, useState } from 'react';

export default function CreateEventPage() {
  const { profile } = useContext(ProfileContext) as ProfileContextProps;
    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [thumbnail, setThumbnail] = useState<string>();
    const [guild, setGuild] = useState<Guild>();

    const handleTitleInputChange = (event: any) => {
        const { name, value } = event.target;
        setTitle(value);
      }
    const handleDescriptionInputChange = (event: any) => {
        const { name, value } = event.target;
        setDescription(value);
      }
    const handleThumbnailInputChange = (event: any) => {
        const { name, value } = event.target;
        setThumbnail(value);
    }

  return (
    <Suspense fallback={<p>Carrendo em suspense</p>}>
          <Frame type={'main'} color={'primary'}>
              <form>
              <div>
                <label htmlFor="title">Event Title:</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleInputChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="description">Event Description:</label>
                    <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionInputChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="thumbnail">Thumbnail URL:</label>
                    <input
                    type="url"
                    id="thumbnail"
                    name="thumbnail"
                    value={thumbnail}
                    onChange={handleThumbnailInputChange}
                    required
                    />
                </div>
                <div>
                    <Button type="submit">Create Event</Button>
                  </div>
              </form>
        </Frame>
    </Suspense>
  );
}
