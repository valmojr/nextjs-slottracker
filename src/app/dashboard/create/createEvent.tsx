import { Dialog, Flex, Button, Text, TextField } from '@radix-ui/themes';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Guild } from '../../Util/types/entity';
import Image from 'next/image';
import { Icon } from '@/app/Util/Components/Images/Avatar';
import IconHandler from '@/app/Util/functions/iconHandler';
import { useState } from 'react';

interface CreateEventComponentProps {
    avaliableGuilds: Guild[] | undefined;
}

export default function CreateEvent({ avaliableGuilds }: CreateEventComponentProps) {
    const [eventTitle, setEventTitle] = useState<string>();
    const [eventDescription, setEventDescription] = useState<string>();
    const [eventThumbnail, setEventThumbnail] = useState<string>();
    const [eventGuild, setEventGuild] = useState<Guild>();

    const handleEventTitle = (e: any) => {
        setEventTitle(e.target.value)
    }

    const handleEventDescription = (e: any) => {
        setEventDescription(e.target.value)
    }

    const handleEventThumbnail = (e: any) => {
        setEventThumbnail(e.target.value)
    }

    const handleEventGuild = (e: any) => {
        setEventGuild(e.target.value)
    }

    if (!avaliableGuilds) {
        return <h1>{'Loading User Guilds'}</h1>
    } else {
        return <>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Create Event</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Title
                        </Text>
                        <TextField.Input placeholder="Event Title" onChange={(e: any)=>handleEventTitle(e)} />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Description
                        </Text>
                        <TextField.Input placeholder="Event Description" onChange={(e: any)=>handleEventDescription(e)}/>
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Thumbnail
                        </Text>
                        <TextField.Input placeholder="Thumbnail URL"  onChange={(e: any)=>handleEventThumbnail(e)}/>
                    </label>
                    <label>
                    <RadioGroup.Root className='flex flex-col gap-1' defaultValue="default" aria-label="View density">
                        <Text as="div" size="2" mb="1" weight="bold">
                            Group/Server
                        </Text>
                            {avaliableGuilds.map((guild) => (
                            <div key={guild.id} className='flex flex-row items-center'>
                                <RadioGroup.Item className='bg-white w-3 h-3 rounded-full shadow-md hover:bg-[var-(--violet-3)] focus:shadow-md' value="default" id="r1">
                                    <RadioGroup.Indicator className={`flex items-center justify-center w-full h-full relative after:w-1 after:h-1 after:content-[''] after:rounded-xl after:block after:bg-[var(--violet-11)]`} />
                                </RadioGroup.Item>
                                <label className='flex flex-row items-center justify-start gap-2 text-md leading-4 pl-4' htmlFor="r1">
                                    <Icon border={'circled'} size={'sm'} icon={<Image height={4800} width={4800} alt={`${guild.name}'s avatar`} src={IconHandler(guild)} />} />
                                    <h1 className='font-medium'>{ guild.name }</h1>
                                </label>
                            </div>
                    ))}
                    </RadioGroup.Root>
                    </label>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button
                            color="green"
                            type={'submit'}
                            onClick={() => null}
                        >Create</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </>
    }
}