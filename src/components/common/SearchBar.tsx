import { Button, Input } from 'antd'
import Box from './Box'
import React, { useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import theme from '../../styling/theme'

const SearchInput = styled(Input)`
  border-radius: 4px 0 0 4px;
  height: 30px;

  & .ant-input {
    color: black;
  }

  & .anticon {
    color: ${theme.bgColor.dark};
    font-size: 15px;
  }
  & .anticon:hover {
    color: ${theme.palette.dark[0]};
  }
`

const SearchButton = styled(Button)`
  height: 30px;
  border: 0px;
  margin-left: -1px;
  border-radius: 0 4px 4px 0;
  z-index: 50;
`

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  const onSearch = () => {
    console.log(searchTerm)
  }

  return (
    <Box flex fullWidth alignItems="center">
      <SearchInput
        allowClear
        onChange={onChange}
        value={searchTerm}
        onPressEnter={onSearch}
        placeholder="Search (#tag1, #tag2)"
      />
      <SearchButton type="primary" onClick={onSearch}>
        <SearchOutlined />
      </SearchButton>
    </Box>
  )
}

export default SearchBar
