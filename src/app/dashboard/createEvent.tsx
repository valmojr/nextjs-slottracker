import { Dialog, Flex, Button, Text, TextField } from '@radix-ui/themes';

export default function CreateEvent() {
    return <>
        <Dialog.Trigger>
            <Button>Create Event</Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Create Event</Dialog.Title>
            <Flex direction="column" gap="3">
                <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    teste
                </Text>
                <TextField.Input placeholder="Event Title"/>
                </label>
                <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Description
                </Text>
                <TextField.Input placeholder="Event Description" />
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Thumbnail
                </Text>
                <TextField.Input placeholder="Thumbnail URL" />
                </label>
            </Flex>
            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button color="green">Create</Button>
                </Dialog.Close>
            </Flex>
    </Dialog.Content>
  </>
}