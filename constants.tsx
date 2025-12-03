import { Home, ScrollText, Palmtree, MapPin, Car, Info } from 'lucide-react';
import { NavItem } from './types';

export const APP_NAME = "2026大桃園盃全國象棋團體錦標賽";

// Dropbox Image (using raw=1 for direct link)
export const HERO_IMAGE_URL = "https://www.dropbox.com/scl/fi/o3csletc5pzijni0kg70a/251017_-_608x352cm_v3.jpg?rlkey=jcygja0b9t5lj8nxz1h7qe8qi&dl=0&raw=1";

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: '首頁', path: '/', icon: Home },
  { id: 'rules', label: '比賽辦法', path: '/rules', icon: ScrollText },
  { id: 'culture', label: '藝文資訊', path: '/culture', icon: Palmtree },
  { id: 'food', label: '美食攻略', path: '/food', icon: MapPin },
  { id: 'traffic', label: '交通資訊', path: '/traffic', icon: Car },
];

export const FOOTER_LINKS = [
  { label: '桃展粉絲專頁', url: 'https://www.facebook.com/TYXQ.2019/' },
];