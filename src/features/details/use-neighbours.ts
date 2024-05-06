import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { loadNeighborsByBorder } from './details-slice';
import { selectNeighbours} from './details-selector'


export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useSelector(selectNeighbours);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
}
