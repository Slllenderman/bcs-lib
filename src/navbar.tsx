import React from "react";
import { useState } from "react";
import { Container, Box, Divider, Typography, Menu, MenuItem, Button, SvgIcon, Stack} from "@mui/material";
import {useNavigate, useLocation} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
  let location = useLocation();
  const authSelector = useSelector((state) => state.auth);
  const { t, i18n } = useTranslation("navbar");
  const [anchorLangBox, setAnchorLangBox] = useState(null);
  const navigator = useNavigate();
  
  const handleCloseLangBox = () => {
    setAnchorLangBox(null);
  };

  const handleOpenLangBox = (event) => {
    setAnchorLangBox(event.currentTarget);
  };

  return (
    <>
      <Container sx={{
        pt: {none: 3, desktop: 4},
        px: {none: 0, desktop: 7},
        position: 'fixed',
        top: 0,
        bgcolor: 'white',
        zIndex: 20,
        maxWidth: {none: 'mobile', desktop: 'desktop'}
      }} id='navbar'>

        <Box display='flex' padding={0} flexDirection='row' justifyContent='space-between' marginBottom={2}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%'
          }} >
            {/* Лого */}
            <Button variant="text" onClick={() => navigator(pathWithLang("/"))}>
              <SvgIcon viewBox="0 0 37 32" sx={{width: {none: 29, desktop: 37}, height: {none: 25, desktop: 32}, mr: {none: '12px', desktop: 2}}}>
                <g clipPath="url(#clip0_301_962)">
                <path d="M9.61997 27.3552C9.58084 27.1516 9.73737 26.948 9.93305 26.9073C10.8723 26.7444 12.3203 26.215 12.3985 23.5683C12.4768 20.6365 10.4027 20.5143 9.30689 20.4329H9.15035C8.71987 20.3921 8.28939 20.5143 7.81978 20.5957C7.31103 20.7179 6.68487 20.8401 6.01959 20.8401C5.27603 20.8401 4.49334 20.5143 3.86718 19.9442C3.20189 19.3334 2.81055 18.4783 2.81055 17.5418C2.81055 15.5058 4.02372 14.4878 4.96295 14.0806C5.23689 13.9584 5.54997 14.1213 5.62824 14.4471C5.66737 14.61 5.5891 14.7321 5.43257 14.7728C4.88468 14.9764 3.59324 15.6279 3.59324 17.5825C3.59324 18.2747 3.86718 18.8855 4.37593 19.3741C4.84555 19.7813 5.43257 20.0664 6.01959 20.0664C6.64574 20.0664 7.15449 19.9442 7.66324 19.8221C8.21112 19.6999 8.71987 19.5777 9.22862 19.6185H9.38516C10.4418 19.6999 13.2986 19.9035 13.1812 23.609C13.103 26.9887 11.068 27.5588 10.0113 27.7624C9.81564 27.8031 9.6591 27.6809 9.6591 27.4773L9.61997 27.3552Z" fill="#00A8B0"/>
                <path d="M17.3688 21.247L16.9383 21.3692C16.86 21.0027 16.7426 20.7177 16.5078 20.5548C16.1948 20.3105 16.0382 20.3105 15.7251 20.2697C15.5686 20.229 15.3729 20.229 15.1381 20.1476C15.099 20.1476 14.9424 20.1476 14.825 20.1476C14.1989 20.1476 12.9074 20.1069 12.79 18.1523C12.79 17.9487 12.9466 17.7859 13.1423 17.7859H13.2988C13.4553 17.7859 13.5727 17.908 13.5727 18.0709C13.6119 19.3332 14.1989 19.3332 14.825 19.3332C14.9816 19.3332 15.1381 19.3332 15.2947 19.3739C15.4903 19.4146 15.6469 19.4554 15.8034 19.4554C16.1556 19.4961 16.4687 19.5368 16.8992 19.8626V10.7821C16.8992 10.5378 17.0557 10.2934 17.2905 10.212L17.6819 10.0898V20.7584C17.6819 20.962 17.5645 21.1656 17.3688 21.247Z" fill="#00A8B0"/>
                <path d="M12.7118 -0.0498047C11.616 -0.0498047 10.2854 0.357391 9.50271 0.968186C8.28954 1.90474 7.85906 2.80057 7.70252 3.45208C7.66339 3.61496 7.54598 3.6964 7.38944 3.6964C7.03723 3.65568 6.64589 3.73712 6.17627 3.81856C5.11964 3.98144 4.45435 4.67367 4.10214 5.16231C3.55425 5.89526 3.00637 6.91325 3.35858 8.13484C3.24117 8.17556 3.12377 8.257 2.96723 8.33844C1.9106 8.90851 0.266944 10.7002 -0.0069987 13.2248C-0.163537 14.7721 0.345213 15.9123 0.697425 16.6452C0.814829 16.8896 0.971367 17.1746 0.971367 17.2968C0.971367 17.5003 0.853963 18.0704 0.73656 18.5998C0.540887 19.3735 0.345213 20.2286 0.345213 20.9208C0.384348 23.7305 1.44098 24.8299 1.98887 25.4C2.10627 25.5221 2.26281 25.685 2.38021 25.8072C3.12377 26.6215 3.78906 27.3952 5.94146 28.1282C5.9806 28.1282 6.05887 28.1282 6.098 28.1689C6.25454 28.1689 7.1155 28.3318 7.19377 28.1689C7.19377 28.1689 6.48935 27.8839 6.17627 27.5174C5.86319 27.1509 5.15877 26.0922 5.15877 25.1149C5.15877 24.7077 5.27617 24.3412 5.55012 23.9748C5.70666 23.7712 5.70666 23.4861 5.51098 23.2825L5.47185 23.2418C5.35444 23.1197 5.23704 23.1197 5.1979 23.2011C4.65002 23.8119 4.41521 24.4634 4.41521 25.1556C4.41521 25.4814 4.49348 25.7664 4.57175 26.0107C4.68916 26.2958 4.33694 26.5401 4.10214 26.3772C3.63252 26.0107 3.28031 25.685 2.9281 25.2778C2.81069 25.1556 2.65416 24.9928 2.49762 24.8299C2.06714 24.382 1.12791 23.4047 1.08877 20.9208C1.08877 20.3507 1.28444 19.5363 1.44098 18.8034C1.59752 18.1519 1.71492 17.6225 1.71492 17.256C1.71492 16.971 1.55839 16.6452 1.36271 16.2788C1.0105 15.5865 0.580021 14.65 0.697425 13.3062C0.932232 11.1074 2.41935 9.56003 3.28031 9.07139C3.55425 8.90851 3.78906 8.78635 3.90646 8.74563L4.10214 8.70491C4.80656 8.58275 5.86319 8.41988 6.80242 8.94923C6.9981 9.07139 7.27204 9.19355 7.46771 9.43787C8.25041 10.2523 8.17214 11.5553 8.05473 12.1661C8.0156 12.3697 8.133 12.5733 8.36781 12.6547C8.56348 12.6954 8.79829 12.5733 8.83743 12.3697C8.91569 11.7996 9.0331 10.8631 8.68089 9.96722C8.75916 9.80434 8.79829 9.7229 8.87656 9.56002C9.1505 9.43787 9.38531 9.27499 9.62012 9.03067C10.0115 8.62347 10.2463 8.0534 10.3245 7.44261C10.3245 7.23901 10.2071 7.07613 10.0115 7.07613H9.85493C9.69839 7.11685 9.58098 7.11685 9.54185 7.36117C9.50271 7.80908 9.30704 8.17556 9.07223 8.4606C8.83742 8.70491 8.52435 8.86779 8.25041 8.86779C8.05473 8.86779 7.97646 8.78635 7.93733 8.78635C7.66339 8.50132 7.38944 8.33844 7.15464 8.257C6.17627 7.72764 5.11964 7.76836 4.33694 7.89052C4.18041 7.93124 4.02387 7.76836 3.98473 7.60548C3.90646 6.99469 4.14127 6.42461 4.65002 5.69166C5.0805 5.12159 5.58925 4.75511 6.21541 4.63295H6.25454C6.9981 4.47007 7.35031 4.47007 7.78079 4.67367L8.48521 4.95871L8.32867 4.18504C8.32867 4.14432 8.09387 3.04489 9.89406 1.66042C10.5202 1.17178 11.6943 0.805307 12.6335 0.805307C14.1206 0.805307 15.3729 1.37538 16.1556 1.90474C16.273 1.90474 16.3904 1.90474 16.5078 1.90474L16.7035 1.74186C16.86 1.6197 16.86 1.33466 16.7035 1.2125C15.9208 0.52027 14.3163 -0.0498047 12.7118 -0.0498047Z" fill="#00A8B0"/>
                <path d="M10.2854 17.7457C9.26791 16.8092 8.87656 15.2618 9.50272 13.8774C9.81579 13.1444 10.4028 12.5336 11.1072 12.2486C12.5552 11.5971 14.1206 12.1264 14.9816 13.3887C15.1381 13.5923 15.0598 13.8774 14.825 13.9995C14.6685 14.081 14.4728 14.0402 14.3554 13.8774C13.8467 13.1037 12.9466 12.6965 12.0465 12.8186C10.9898 12.9815 10.1289 13.9181 10.0115 15.0175C9.9332 15.8319 10.2463 16.6056 10.7942 17.1349C10.9116 17.2164 10.9507 17.3792 10.8333 17.5421L10.7159 17.6643C10.6376 17.8272 10.4419 17.8679 10.2854 17.7457Z" fill="#00A8B0"/>
                <path d="M6.68506 28.5352C7.74169 29.5939 8.994 29.4717 10.168 29.3088C13.1031 28.8202 15.3729 27.1507 17.4862 24.9518C16.7427 24.6668 16.1165 24.4632 15.3729 24.1782C18.3472 22.9566 21.1649 21.5721 23.7086 19.5361C21.5562 23.6488 21.1257 26.377 20.8909 28.698C20.4604 28.0465 20.03 27.395 19.5603 26.7028C18.308 28.2908 16.7818 29.4717 15.0207 30.3268C13.8076 30.9376 12.5161 31.3448 11.1073 31.467C9.42448 31.6299 7.27208 30.2861 6.68506 28.5352Z" fill="#00A8B0"/>
                <path d="M28.2872 2.84168C27.2306 1.78297 25.9783 1.90513 24.8042 2.06801C21.8692 2.55665 19.5993 4.22615 17.4861 6.42501C18.2296 6.71004 18.8558 6.91364 19.5993 7.19868C16.6251 8.42027 13.8074 9.80474 11.2637 11.8407C13.4161 7.72804 13.8466 4.99982 14.0814 2.6788C14.5118 3.33032 14.9423 3.98183 15.4119 4.67407C16.6642 3.086 18.1905 1.90513 19.9516 1.05002C21.1647 0.439225 22.4562 0.0320286 23.865 -0.0901303C25.5478 -0.253009 27.7393 1.09074 28.2872 2.84168Z" fill="#00A8B0"/>
                <path d="M36.897 13.1439C36.8188 10.7414 35.0577 8.86832 33.9228 8.21681C33.7663 8.13537 33.6489 8.05393 33.5315 8.01321C33.8837 6.79162 33.3358 5.77363 32.7879 5.04068C31.9661 3.90053 31.5747 3.57477 30.5964 3.28974C29.8528 3.04542 28.6788 3.16758 28.444 3.2083L25.0784 3.69693C24.8827 3.45262 24.6479 3.33046 24.3348 3.33046C23.7869 3.33046 23.3565 3.77837 23.3565 4.34845C23.3565 4.4706 23.3956 4.59276 23.4347 4.6742L20.4996 7.85033C20.304 7.72818 20.1083 7.68745 19.8735 7.68745C19.169 7.68745 18.582 8.29825 18.582 9.0312C18.582 9.60128 18.9342 10.0899 19.4039 10.2935V18.8039C19.169 18.9668 19.0125 19.2111 19.0125 19.5369C19.0125 19.9848 19.3647 20.392 19.8343 20.392C20.2648 20.392 20.6562 20.0255 20.6562 19.5369C20.6562 19.4554 20.6562 19.4147 20.617 19.3333L22.9651 17.5416C23.1608 17.7859 23.4739 17.9895 23.8261 17.9895C23.9043 17.9895 24.0217 17.9895 24.1 17.9488L25.1566 21.8986C24.8827 22.0615 24.7262 22.3872 24.7262 22.713C24.7262 22.9573 24.8044 23.1609 24.9218 23.3238L21.8693 29.2689L21.6345 29.7168C22.4172 29.9204 23.513 30.0425 24.2566 30.0425C27.3482 30.0425 29.6963 28.6581 30.0485 28.4137C33.0227 27.4365 35.6056 24.5454 36.584 21.0028C36.897 19.9033 36.8188 17.4602 35.9578 16.4015C36.1926 15.8314 36.9362 14.2433 36.897 13.1439ZM33.7663 8.90904C34.7446 9.4384 36.0752 11.1079 36.1143 13.1846C36.1535 14.0397 35.4882 15.5056 35.2142 15.9128L31.3791 12.6145C31.5356 12.3702 31.6139 12.0852 31.6139 11.8001C31.6139 11.3115 31.4182 10.9043 31.066 10.6193L32.9053 8.42041C32.9053 8.42041 33.414 8.70544 33.7663 8.90904ZM30.2833 21.1249L24.8436 17.0122C24.8436 16.9308 24.8827 16.8494 24.8827 16.7679C24.8827 16.5236 24.8044 16.32 24.687 16.1164L29.031 12.8588C29.3049 13.1439 29.6963 13.3475 30.1267 13.3475L31.0268 20.5956C30.7138 20.677 30.4398 20.8806 30.2833 21.1249ZM23.7478 15.5871C23.7087 15.5871 23.6304 15.5871 23.5913 15.5871L20.5779 10.0492C20.7736 9.88631 20.9301 9.68272 21.0084 9.4384L28.6396 11.5965C28.6396 11.678 28.6005 11.7187 28.6005 11.8001C28.6005 12.0445 28.6788 12.2888 28.7962 12.5331L24.4131 15.8721C24.2565 15.7092 24.0217 15.5871 23.7478 15.5871ZM30.1267 10.2528C29.8528 10.2528 29.5789 10.3342 29.3441 10.4971L25.0392 5.04068C25.0784 4.99996 25.1175 4.95924 25.1566 4.91852L32.5531 8.29825L30.7529 10.4157C30.5572 10.2935 30.3616 10.2528 30.1267 10.2528ZM24.2957 5.36644C24.4522 5.36644 24.5696 5.32572 24.687 5.285L29.031 10.7414C28.9136 10.8636 28.7962 11.0265 28.757 11.1893L21.1258 9.07192V9.0312C21.1258 8.78688 21.0475 8.54257 20.9301 8.33897L23.8261 5.24428C23.9826 5.32572 24.1391 5.36644 24.2957 5.36644ZM32.1226 20.8399C31.9269 20.677 31.6921 20.5956 31.4182 20.5956L30.5181 13.3068C30.7529 13.2253 30.9877 13.1032 31.1442 12.9403L35.0186 16.32L32.1226 20.8399ZM28.9136 3.85981C29.3049 3.81909 29.7745 3.90053 30.4007 4.10413C31.1442 4.34845 31.4182 4.51132 32.1617 5.57003C32.827 6.46587 32.9836 7.1581 32.7488 7.93177L25.3132 4.51133C25.3132 4.47061 25.3132 4.42989 25.3132 4.38917C25.3132 4.34845 25.3132 4.26701 25.3132 4.22629L28.9136 3.85981ZM20.3431 18.9261C20.2648 18.8446 20.2257 18.8039 20.1474 18.7632V10.3342C20.1866 10.3342 20.2257 10.2935 20.2648 10.2935L23.239 15.7907C22.8868 15.9943 22.652 16.3607 22.652 16.8086C22.652 16.9308 22.6912 17.053 22.7303 17.1751L20.3431 18.9261ZM24.374 17.7452C24.4914 17.6638 24.6088 17.5416 24.687 17.4194L30.0485 21.4914C29.9702 21.6543 29.9311 21.8579 29.9311 22.0208C29.9311 22.0615 29.9311 22.1022 29.9311 22.1022L26.409 22.2651C26.2524 21.9393 25.9393 21.695 25.548 21.695C25.5089 21.695 25.4697 21.695 25.4306 21.695L24.374 17.7452ZM22.3781 28.9838L25.1958 23.5681C25.3132 23.6495 25.4697 23.6903 25.6263 23.6903C25.7828 23.6903 25.9393 23.6495 26.0567 23.5681L29.4223 27.7622C28.6005 28.1694 25.7437 29.6353 22.3781 28.9838ZM29.7354 27.5179L26.3307 23.2831C26.4481 23.1202 26.5264 22.9166 26.5264 22.6723L30.0485 22.5094C30.205 22.9166 30.5181 23.2016 30.9094 23.3645L29.7354 27.5179ZM35.7621 20.677C34.9012 23.731 32.7096 26.3778 30.1659 27.3957L31.2616 23.4052H31.3008C32.0443 23.4052 32.6705 22.7537 32.6705 21.98C32.6705 21.6543 32.5531 21.3285 32.3574 21.0842L35.2534 16.605C35.7621 17.5009 36.0361 19.7812 35.7621 20.677Z" fill="#00A8B0"/>
                </g>
                <defs>
                <clipPath id="clip0_301_962">
                <rect width="37" height="32" fill="white"/>
                </clipPath>
                </defs>
              </SvgIcon>
              <Typography variant='h3' color="initial">{t("title")}</Typography>
            </Button>
            {/* Мобильное меню */}
            <ButtonAppBar/>
          </Box>
          {/* Бокс с авторизацией и выбором языка */}
          <Box sx={{
              display: {none: 'none', desktop: 'flex'},
              flexDirection: 'row', justifyContent: 'space-between',
              alignItems:'center',
            }}>
            {/* Меню выбора языка */}
            <Box sx={{ flexGrow: 0, mr: 3, borderColor: 'primary.main', borderwidth: '3px', border: 'initial', display: 'flex', flexDirection: 'column' }}>
              <Button variant="text" onClick={handleOpenLangBox}><Typography variant="h3" color={'initial'} >{langs[getCurrentLanguage()]}</Typography></Button>
              <Menu
                sx={{ 
                  mt: 4,
                  borderWidth: 2
                }}
                elevation={0}
                id="auth-appbar"
                anchorEl={anchorLangBox}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorLangBox)}
                onClose={handleCloseLangBox}
              >
              </Menu>
            </Box>
            {/* Кнопка входа в аккаунт */}
            <Stack direction={"row"} gap={2}>
              {authSelector.access
              ? <Button variant="outlined" onClick={() => navigator(pathWithLang('/profile'))} sx={{py: 1, px: 3, width: 'max-content'}}>
                  <Typography variant="h3" color="initial">{t('profile')}</Typography>
                </Button>
              : <Button onClick={() => navigator(pathWithLang('/auth'))} variant="outlined" sx={{py: 1, px: 3}}>
                  <Typography variant="h3" color="initial">{t("sign_in")}</Typography>
                </Button>
              }
              {authSelector.groups?.find(item => item.includes('Рецензент'))
              && <Button variant="outlined" onClick={() => navigator(pathWithLang('/review'))} sx={{py: 1, px: 3, width: 'max-content'}}>
                  <Typography variant="h3" color="initial">Рецензирование</Typography>
                </Button>
              }
            </Stack>
          </Box>
        </Box>
        <Divider/>
        {/* Нижнее меню страниц, только десктопное */}
        <Box sx={{
          display: {none: 'none', desktop: 'flex'},
          flexDirection: 'row', justifyContent: 'space-between',
          my: 2
        }}>
          <Button variant="text" onClick={() => navigator(pathWithLang('/org'))}>
            <Typography variant="h3" sx={location.pathname === pathWithLang('/org') ? {textDecoration: 'underline', fontStyle: 'italic'} : {}} color="initial">{t('org')}</Typography>
          </Button>
          <Button variant="nav_link" onClick={() => navigator(pathWithLang('/program'))}>
            <Typography variant="h3" sx={location.pathname === pathWithLang('/program') ? {textDecoration: 'underline', fontStyle: 'italic'} : {}} color="initial">{t('program')}</Typography>
          </Button>
          <Button variant="nav_link" onClick={() => navigator(pathWithLang('/subjects'))}>
            <Typography variant="h3" sx={location.pathname === pathWithLang('/subjects') ? {textDecoration: 'underline', fontStyle: 'italic'} : {}} color="initial">{t('subjects')}</Typography>
          </Button>
          <Button variant="nav_link" onClick={() => navigator(pathWithLang('/requirements'))}>
            <Typography variant="h3" sx={location.pathname === pathWithLang('/requirements') ? {textDecoration: 'underline', fontStyle: 'italic'} : {}} color="initial">{t("requirements")}</Typography>
          </Button>
          <Button variant="nav_link" onClick={() => navigator(pathWithLang('/lastConf'))}>
            <Typography variant="h3" sx={location.pathname === pathWithLang('/lastConf') ? {textDecoration: 'underline', fontStyle: 'italic'} : {}} color="initial">{t("lastConf")}</Typography>
          </Button>
        </Box>
        <Divider/>
      </Container>
    </>
  );
}