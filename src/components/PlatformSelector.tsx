import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import useGameQueryStore from "../store"

const PlatformSelector = () => {
    const { data, error } = usePlatforms()
    if (error) return null

    const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId)
    const selectedPlatform = data?.results.find((p) => p.id === selectedPlatformId)

    const setSelectPlatformId = useGameQueryStore((s) => s.setPlatformId)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem onClick={() => setSelectPlatformId(platform.id)} key={platform.id}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector
